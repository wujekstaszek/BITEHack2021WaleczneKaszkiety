import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import logo from '../../icons/logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/auth';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100vw',
    height: `${theme.topBarHeight}px`,
    backgroundColor: theme.palette.main,
    alignItems: 'center',
  },
  logo: {
    width: '400px',
    height: '100%',
    background: `url(${logo}) no-repeat`,
    backgroundSize: '100%',
  },
  text: {
    color: theme.palette.navbar,
  },
  userSection: {
    overflow: 'hidden',
    margin: '0 50px',
    width: '100%',
  },
  loginButton: {
    fontSize: '18px',
  },
  iconWrapper: {
    overflow: 'hidden',
    position: 'absolute',
    top: '15px',
    right: '30px',
  },
  user: {
    overflow: 'hidden',
    marginRight: '20px',
  },
}));

const Topbar = ({ username, logoutUser }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container justify="space-between">
      <div className={classes.logo} />
      <Typography className={classes.text} variant="h5">
        {/* SEARCH BAR BITCHES */}
      </Typography>
      <Typography className={classes.text} variant="h5">
        {/* USER CONTENT SHIEEET */}
        {/* <Fab> */}
        {/* <div> */}

        <Grid direction="column" className={classes.userSection}>
          <div>
            <Typography variant="body4" className={classes.user}>
              {username ? `Hello, ${username}!` : 'Guest'}
            </Typography>
            <div className={classes.iconWrapper}>
              <AccountCircleIcon></AccountCircleIcon>
            </div>
          </div>
          {/* </Fab> */}
          {username ? (
            <Button
              className={classes.loginButton}
              onClick={() => logoutUser()}
              color="secondary"
            >
              Logout
            </Button>
          ) : (
            <Button
              className={classes.loginButton}
              href="/signin"
              color="secondary"
            >
              Login
            </Button>
          )}
        </Grid>
        {/* </div> */}
      </Typography>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
