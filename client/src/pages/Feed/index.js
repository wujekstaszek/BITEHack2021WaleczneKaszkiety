import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    width: `${theme.feedWidth}px`,
    minHeight: '100vh',
    background: theme.palette.main,
    margin: '0 auto',
  },
}));

const Feed = (props) => {
  const classes = useStyles();
  return <Grid container className={classes.main}></Grid>;
};

export default Feed;
