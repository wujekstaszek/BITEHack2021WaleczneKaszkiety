import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import Navitem from "../Navitem";
import Collapse from "@kunukn/react-collapse";
import CollapseSection from "../CollapseSection";

import { domains } from "../../constants";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "absolute",
    top: 0,
    width: "100vw",
    height: `${theme.navbarHeight}px`,
    backgroundColor: theme.palette.navbar,
    boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.75)",
  },
}));

const Navbar = (props) => {
  const [collapseContent, setCollapseContent] = useState("");
  const classes = useStyles();

  return (
    <nav>
      <Grid
        container
        className={classes.wrapper}
        direction="row"
        justify="space-around"
        alignContent="center"
      >
        {Object.values(domains).map((domain, i) => (
          <Navitem
            key={i}
            onMouseOver={() => setCollapseContent(domain.title)}
            title={domain.title}
          />
        ))}
      </Grid>
      <Collapse isOpen={collapseContent.length !== 0}>
        <CollapseSection title={collapseContent} domains={domains} />
      </Collapse>
    </nav>
  );
};

export default Navbar;
