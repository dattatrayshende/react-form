import React from 'react';
import { Typography } from 'antd';
import { Form, Container, Col } from 'react-bootstrap';
import { Menu, Dropdown, Button, message, Upload, Input } from 'antd';
import Date from '../form/date';
import { DownOutlined, UploadOutlined, CloudUploadOutlined, PlusOutlined  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.css";

const { Title } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UploadOutlined />}>
            File 1
      </Menu.Item>
        <Menu.Item key="2" icon={<UploadOutlined />}>
            File 2
      </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
            File 3
      </Menu.Item>
    </Menu>
);

const menu1 = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            Risk 1
      </Menu.Item>
        <Menu.Item key="2">
            Risk 2
      </Menu.Item>
        <Menu.Item key="3">
            Risk 3
      </Menu.Item>
    </Menu>
);

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const addWsr = () => {
    return (
        <Container className="mb-3">
            <div>
                <Title className="text-center">Add new WSR</Title>
            </div>
            <div id="components-dropdown-demo-dropdown-button">
                <Dropdown overlay={menu}>
                    <Button block className="text-left">
                        Upload Files <DownOutlined />
                    </Button>
                </Dropdown>
            </div>

            <div className="mt-3" >
                <Dragger {...props} className="w-25 mx-auto">
                    <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                </Dragger>
            </div>

            <div  className="mt-3" >
                <TextArea rows={4} />
            </div>

            <div id="components-dropdown-demo-dropdown-button" className="mt-3">
                <Dropdown overlay={menu1}>
                    <Button block className="text-left">
                        Risks <DownOutlined />
                    </Button>
                </Dropdown>
                <Form className="mt-3">
                <Form.Row>
                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect1">
                            <Form.Label>Risk Type</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Risk Type 1</option>
                                <option>Risk Type 2</option>
                                <option>Risk Type 3</option>
                                <option>Risk Type 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect2">
                            <Form.Label>Internal/External</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Internal/External 1</option>
                                <option>Internal/External 2</option>
                                <option>Internal/External 3</option>
                                <option>Internal/External 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect3">
                            <Form.Label>Owner</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Owner 1</option>
                                <option>Owner 2</option>
                                <option>Owner 3</option>
                                <option>Owner 4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect4">
                            <Form.Label>Severity</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Severity 1</option>
                                <option>Severity 2</option>
                                <option>Severity 3</option>
                                <option>Severity 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect5">
                            <Form.Label>Priority</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Priority 1</option>
                                <option>Priority 2</option>
                                <option>Priority 3</option>
                                <option>Priority 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="enddate">
                            <Form.Label>Risk Raised Date</Form.Label>
                            <Date />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect6">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number">
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect7">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select">
                                <option>Select</option>
                                <option>Status 1</option>
                                <option>Status 2</option>
                                <option>Status 3</option>
                                <option>Status 4</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect7">
                             <br/>
                             <Button type="dashed" className="mt-2 w-100">
                                <PlusOutlined />
                             </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>  
            </div>
        </Container>
    )
}

export default addWsr