import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import AddDialog from './component/addDialog'
import CardGrid from './component/cardGrid'


class App extends Component {

  state = {
    team:[
      {
        name:"Allen"
      },
      {
        name:"Bird"
      },
      {
        name:"Taixi"
      },
      {
        name:"William"
      },
      {
        name:"Eric"
      },
      {
        name:"Jeff"
      }
    ]
  }

  render() {
    return (
      <div style={{margin: 'auto'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <CardGrid team={this.state.team} />
        <AddDialog hidden={true}/>
      </div>
    );
  }
}

export default App;
