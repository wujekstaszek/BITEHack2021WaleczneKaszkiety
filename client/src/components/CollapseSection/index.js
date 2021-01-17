import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100vw',
    backgroundColor: theme.palette.navbar,
    padding: '30px',
  },
  navOption: {
    margin: '15px 0',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: 'orange',
  },
}));

const CollapseSection = ({ title, fields }) => {
  const classes = useStyles();
  const options = fields.find(({ name }) => name === title).tags;

  return (
    <Grid
      container
      className={classes.wrapper}
      direction="column"
      alignItems="flex-start"
    >
      {options.map(({ tag_id, name }) => (
        <Typography className={classes.navOption} variant="h5" key={tag_id}>
          {name}
        </Typography>
      ))}
    </Grid>
  );
};

export default CollapseSection;
