import React, { Component } from 'react';
import {Route, Switch, NavLink, Redirect} from 'react-router-dom';
import './App.css'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Landing from './containers/Landing/Landing';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="Nav">
        <nav>
          <ul>
            <li><NavLink to ="/" exact >Home</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
          </ul>
        </nav> 
        </div>
        <Switch>
          <Route path="/Users"  component={Users}/>
          <Route path="/courses" component={Courses}/>
          <Route path="/courses/:id" component={Courses}/>
          <Route path="/" exact component={Landing}/>
          <Redirect from="/all-courses" to="/courses"/>
          <Route path="/"  render={()=><h1>404 Not Found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
