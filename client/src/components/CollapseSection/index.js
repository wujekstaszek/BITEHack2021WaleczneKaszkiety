import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100vw",
    backgroundColor: theme.palette.navbar,
    padding: "30px",
  },
  navOption: {
    margin: "15px 0",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "orange",
  },
}));

const CollapseSection = ({ title, domains }) => {
  const classes = useStyles();
  const options = domains[title.toUpperCase()].sections;

  return (
    <Grid
      container
      className={classes.wrapper}
      direction="column"
      alignItems="flex-start"
    >
      {options.map((option, i) => (
        <Typography className={classes.navOption} variant="h5" key={i}>
          {option}
        </Typography>
      ))}
    </Grid>
  );
};

export default CollapseSection;
