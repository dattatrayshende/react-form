import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, } from 'antd';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.css';
import { DownloadOutlined, FlagTwoTone  } from '@ant-design/icons';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
 
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Project Name',
        dataIndex: 'name',
      },
      {
        title: 'Project Manager',
        dataIndex: 'manager',
      },
      {
        title: 'Week end Date',
        dataIndex: 'week',
      },
      {
        title: 'Overall Project Status',
        dataIndex: 'status',
      },
      {
        title: 'Open Risk',
        dataIndex: 'risk',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
            key: '1',
            name: 'API',
            manager: 'Manager1',
            week: 'dd/mm/yy',
            status: <FlagTwoTone twoToneColor="#178408"/>,
            risk: 2,
        },
        {
            key: '2',
            name: 'EYC',
            manager: 'Manager2',
            week: 'dd/mm/yy',
            status: <FlagTwoTone twoToneColor="#ff0005"/>,
            risk: 1,
        },
        {
            key: '3',
            name: 'SMAI',
            manager: 'Manager3',
            week: 'dd/mm/yy',
            status: <FlagTwoTone twoToneColor="#178408"/>,
            risk: 0,
        },
        {
            key: '4',
            name: 'SIAI',
            manager: 'Manager1',
            week: 'dd/mm/yy',
            status: <FlagTwoTone twoToneColor="#ffa600"/>,
            risk: 3,
        },
      ],
      count: 4,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `API`,
      manager: `Manager2`,
      week: `dd/mm/yyyy`,
      status:<FlagTwoTone twoToneColor="#178408"/>,
      risk:`3`
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button className="mx-3"
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add
        </Button>
        <Button type="primary"  className="mx-3" icon={<DownloadOutlined />} >
          Download
        </Button>
        <Button type="primary" className="mx-3">
          Schedule Audit Metting
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}

const addTable =()=>{
    return (
            <Container className="p-3 border mt-3">
              <EditableTable />
            </Container>
    )

}

export default addTable;