import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    backgroundColor: theme.palette.navbar,
    padding: "30px",
  },
  navOption: {
    cursor: "pointer",
  },
}));

const CollapseSection = ({ title, domains }) => {
  console.log(domains);
  const classes = useStyles();
  const options = domains[title.toUpperCase()].sections;

  return (
    <Grid
      container
      className={classes.wrapper}
      justify="column"
      alignItems="flex-start"
    >
      {options.map((option, i) => (
        <Typography className={classes.navOption} key={i}>
          {option}
        </Typography>
      ))}
    </Grid>
  );
};

export default CollapseSection;
