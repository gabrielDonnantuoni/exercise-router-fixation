import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
          <Link to="/strictAccess">Strict Access</Link>
        </nav>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetings="Good morning" /> } />
          <Route path="/about" component={ About } />
          <Route path="/strictAccess" render={ (props) => <StrictAccess { ...props } user={ { username: 'joao', password: '123' } } /> } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;