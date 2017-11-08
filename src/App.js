import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MemberList from './component/memberList'


class App extends Component {

  render() {
    return (
      <div style={{margin: 'auto'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <MemberList />
        
      </div>
    );
  }
}

export default App;
