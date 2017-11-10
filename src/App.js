import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import TeamPage from './component/team/TeamPage'
import HistoryPage from './component/history/HistoryPage'
import { Route, Link, Switch } from 'react-router-dom'
import {
  Header,
  Navigation,
  Content,
  Layout
} from 'react-mdl';


class App extends Component {

  render() {
    return (
      <div style={{ margin: 'auto' }}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Layout >
          <Header title="StarVedia RD" >
            <Navigation>
              <Link exact to='/' >Team</Link>
              <Link to='/history' >History</Link>
            </Navigation>
          </Header>
          <Content>
            <Switch>
              <Route exact path='/' component={TeamPage} />
              <Route path='/history' component={HistoryPage} />
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
          </Content>
        </Layout>

      </div>
    );
  }
}

export default App;
