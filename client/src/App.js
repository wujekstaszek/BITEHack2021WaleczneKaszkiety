import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';
import { connect } from 'react-redux';
import Topbar from './components/Topbar';
import Feed from './pages/Feed';
import './App.scss';
import Login from './components/Login';

const App = ({ routes }) => {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Switch></Switch>
      <BrowserRouter>
        <Switch>
          {routes &&
            routes.map((route) => (
              <Route exact path={`/${route.toLowerCase()}`} component={Feed} />
            ))}
          <Route exact path="/signin" component={Login} />
        </Switch>
      </BrowserRouter>
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
