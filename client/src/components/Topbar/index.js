import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import logo from '../../icons/logo.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: `${theme.topBarHeight}px`,
    backgroundColor: theme.palette.main,
    alignItems: 'center',
  },
  logo: {
    width: '300px',
    height: '100%',
    background: `url(${logo}) no-repeat`,
    backgroundSize: '100%',
  },
  text: {
    color: theme.palette.navbar,
  },
}));

const Topbar = (props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container justify="space-between">
      <div className={classes.logo} />
      <Typography className={classes.text} variant="h5">
        SEARCH BAR BITCHES
      </Typography>
      <Typography className={classes.text} variant="h5">
        USER CONTENT SHIEEET
      </Typography>
    </Grid>
  );
};

export default Topbar;