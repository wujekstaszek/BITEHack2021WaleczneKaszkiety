import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withTheme from '../../hoc/withTheme';

import { fetchFields as getFields } from '../../store/actions/fields';

const AppProvider = ({ fetchPosts, children }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        {children}
      </>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(getFields()),
});

export default withTheme(connect(null, mapDispatchToProps)(AppProvider));
