import React, { Component } from 'react';
// import Form from './components/form/form'; 
//import AddTable from './components/form/add-table';
import { Container } from 'react-bootstrap';
import Form from '../form/form'; 
import AddTable from '../form/add-table';

class Customers extends Component{
  render () {
    return(
        <Container>
          <div className="p-3 border">
          <h1 className="text-center">Project Details</h1>
            <Form />
            <AddTable />
          </div>
        </Container>
    )
  }
}

export default Customers;
