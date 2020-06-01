import React, { Component } from 'react';
import './App.css';
//import Form from './components/form/form'; 
// import Table from './components/table';
// import AddTable from './components/form/add-table';
import { Container } from 'react-bootstrap';
import AddWSR from './components/upload-form/addWSR'
import Customer from './components/customers/customer';

class App extends Component{
  render () {
    return(
        <Container>
         <div className="p-3 border">
            <Customer />
          </div>
          <div className="mt-3 border">
              <AddWSR />
          </div> 
        </Container>
    )
  }
}

export default App;
