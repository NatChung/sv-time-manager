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
        name:'Allen',
        status: 'stopped',
        doing: {
          targetSeconds: 1800,
          restOfSeconds:0,
          item:'itemA'
        },
        done:[]
      },
      {
        name:"Bird",
        status: 'paused',
        doing: {
          targetSeconds: 18000,
          restOfSeconds:0,
          item:'item2 B'
        },
        done:[]
      },
      {
        name:"Taixi",
        status: 'started',
        doing: {
          targetSeconds: 0,
          restOfSeconds:0,
          item:'item3 T'
        },
        done:[]
      },
      {
        name:"William",
        status: 'stopped',
        doing: {
          targetSeconds: 0,
          restOfSeconds:0,
          item:'item2 william'
        },
        done:[]
      },
      {
        name:"Eric",
        status: 'stopped',
        doing: {
          targetSeconds: 0,
          restOfSeconds:0,
          item:'item3'
        },
        done:[]
      },
      {
        name:"Jeff",
        status: 'started',
        doing: {
          targetSeconds: 0,
          restOfSeconds:0,
          item:'item2'
        },
        done:[]
      }
    ],
    dialog:{
      hidden: false,
      time:0,
      name: ''
    }
  }

  constructor(props){
    super(props)
    this.onDialogCancel.bind(this)
  }

  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  tick(){
    this.setState((preState) => {
      preState.team.map((member, i) => {
        if(member.status === 'started')
          member.doing.restOfSeconds++
      })
      return preState
    })
  }

  onDialogCancel = () => {
    this.setState(preState => {
      preState.dialog.hidden = true
      return preState
    })
  }

  onDialogAddJob = ()=> {
    console.log(`onDialogAddJob`)
  }


  render() {
    return (
      <div style={{margin: 'auto'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <CardGrid team={this.state.team} />
        <AddDialog 
          name={this.state.dialog.name}
          hidden={this.state.dialog.hidden} 
          onAddJob={this.onDialogAddJob}
          onCancel={this.onDialogCancel} />
      </div>
    );
  }
}

export default App;
