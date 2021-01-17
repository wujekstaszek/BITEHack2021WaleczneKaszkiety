import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import './App.scss';
import Login from './components/Login';

const App = ({ routes }) => {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Switch>
        {routes &&
          routes.map((route) => (
            <Route exact path={`/${route.toLowerCase()}`} component={Feed} />
          ))}
        <Route exact path="/signin" component={Login} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  const routeNames = state.fields.fields.reduce(
    (acc, curr) => [...acc, curr.name],
    []
  );
  return {
    routes: routeNames,
  };
};

export default connect(mapStateToProps)(App);
