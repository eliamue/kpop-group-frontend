import React, { Component } from 'react';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <h1>Kpop Groups</h1>
        <p><Link to ="/">Home</Link></p>
        <p><Link to ="/create">Add a Kpop Group</Link></p>
        <Switch>
          <Route 
              path="/" 
              exact
              render={(routerProps) => 
                <ListPage {...routerProps} />} 
          /> 
          <Route 
              path="/" 
              exact
              render={(routerProps) => 
                <DetailPage {...routerProps} />} 
            /> 
          <Route 
              path="/" 
              exact
              render={(routerProps) => 
                <CreatePage {...routerProps} />} 
          /> 
        </Switch>
      </div>
    </Router>
  );
}
}
