import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withTheme from '../../hoc/withTheme';
import Feed from '../../pages/Feed';
import Login from '../Login';

import { fetchFields as getFields } from '../../store/actions/fields';

const AppProvider = ({ fetchPosts, routes, children }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {routes &&
          routes.map((route) => (
            <Route exact path={`/${route.toLowerCase()}`} component={Feed} />
          ))}
        <Route exact path="/signin" component={Login} />
      </Switch>
        <CssBaseline />
        {children}
    </BrowserRouter>
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

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(getFields()),
});

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(AppProvider));
