import React from 'react';
import { Form, Button, Container, Col, Row  } from 'react-bootstrap';
import Date from './date';
import "bootstrap/dist/css/bootstrap.css";

const formExample = () => {
  return (    
    <Container className="p-3 border mt-3">
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Customer</Form.Label>
                <Form.Control as="select">
                  <option>Select</option>
                  <option>Customer 1</option>
                  <option>Customer 2</option>
                  <option>Customer 3</option>
                  <option>Customer 4</option>
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect2">
              <Form.Label>Project Name</Form.Label>
                <Form.Control as="select">
                  <option>Select</option>
                  <option>Project Name 1</option>
                  <option>Project Name 2</option>
                  <option>Project Name 3</option>
                  <option>Project Name 4</option>
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect3">
              <Form.Label>Project Manager</Form.Label>
                <Form.Control as="select">
                  <option>Select</option>
                  <option>Project Manager 1</option>
                  <option>Project Manager 2</option>
                  <option>Project Manager 3</option>
                  <option>Project Manager 4</option>
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="exampleForm.ControlSelect4">
              <Form.Label>Delivery Manager</Form.Label>
                <Form.Control as="select">
                  <option>Select</option>
                  <option>Delivery Manager 1</option>
                  <option>Delivery Manager 2</option>
                  <option>Delivery Manager 3</option>
                  <option>Delivery Manager 4</option>
              </Form.Control>
          </Form.Group>
        </Form.Row>
        
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="exampleForm.ControlSelect5">
            <Form.Label>Project Status</Form.Label>
              <Form.Control as="select">
                <option>Select</option>
                <option>Project Status 1</option>
                <option>Project Status 2</option>
                <option>Project Status 3</option>
                <option>Project Status 4</option>
              </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="startdate">
            <Form.Label>Start Date</Form.Label>
              <Date />
          </Form.Group>  

          <Form.Group as={Col} md="4" controlId="enddate">
            <Form.Label>End Date</Form.Label>
              <Date />
          </Form.Group>  

        </Form.Row>

        <div>
          <Button variant="primary" type="submit" className="mx-3">
            Submit
          </Button>
          <Button variant="primary" type="reset">
            Reset
          </Button>
        </div>
      </Form>  
    </Container>
    
  )
}
export default formExample;