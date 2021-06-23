import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';
import './App.css';

export default class App extends Component {
  render() {
  return (
    <Router>
      <div className='kpop-groups'>
        <header>
          <h1>Kpop Groups</h1>
          <p><Link to ="/">Home</Link></p>
          <p><Link to ="/create">Add a Kpop Group</Link></p>
        </header>
        <Switch>
          <Route 
              path="/" 
              exact
              render={(routerProps) => 
                <ListPage {...routerProps} />} 
          /> 
          <Route 
              path="/kpop/:id" 
              exact
              render={(routerProps) => 
                <DetailPage {...routerProps} />} 
            /> 
          <Route 
              path="/create" 
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
