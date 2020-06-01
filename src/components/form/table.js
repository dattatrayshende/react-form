import React  from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Container } from 'react-bootstrap';
// import { Button } from 'antd';

const dataSource = [
    {
        key: '1',
        name: 'API',
        manager: 'Manager1',
        week: 'dd/mm/yy',
        address: '10 Downing Street',
        risk: 2,
    },
    {
        key: '2',
        name: 'EYC',
        manager: 'Manager2',
        week: 'dd/mm/yy',
        address: '10 Downing Street',
        risk: 1,
    },
    {
        key: '3',
        name: 'SMAI',
        manager: 'Manager3',
        week: 'dd/mm/yy',
        address: '10 Downing Street',
        risk: 0,
    },
    {
        key: '4',
        name: 'SIAI',
        manager: 'Manager1',
        week: 'dd/mm/yy',
        address: '10 Downing Street',
        risk: 3,
    },
  ];
  
  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Project Manager',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: 'Week end Date',
      dataIndex: 'week',
      key: 'week',
    },
    {
        title: 'Overall Project Status',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Open Risk',
        dataIndex: 'risk',
        key: 'risk',
      },
  ];

  
  
  const tableExample = () => {
      return (
        <Container className="mt-5">
            <Table dataSource={dataSource} columns={columns} />
        </Container>
      )
  }

  export default tableExample;
  