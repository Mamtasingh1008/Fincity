import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./Component/Form";
import data from "./Component/Form.json";

class App extends Component {
  render() {
    return (
      <div>
         <Form items={data.items} />
      </div>
    );

  }

}

export default App;
