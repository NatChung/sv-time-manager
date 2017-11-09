import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import MemberList from './component/memberList'
import {
    Header,
    Navigation,
    Content,
    Layout
} from 'react-mdl';


class App extends Component {

  render() {
    return (
      <div style={{margin: 'auto'}}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <Layout >
        <Header title="StarVedia RD" >
          <Navigation>
                <a href="#">Team</a>
                <a href="#">History</a>
            </Navigation>
        </Header>
        <Content>
          <MemberList />
        </Content>
        </Layout>
        
      </div>
    );
  }
}

export default App;
