import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Navitem from '../Navitem';
import Collapse from '@kunukn/react-collapse';
import CollapseSection from '../CollapseSection';
import { withRouter } from 'react-router-dom';

import { domains } from '../../constants';

const useStyles = makeStyles((theme) => ({
  nav: {
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
    backgroundColor: theme.palette.navbar,
  },
  wrapper: {
    position: 'absolute',
    top: `${theme.topBarHeight}px`,
    width: '100vw',
    height: `${theme.navbarHeight}px`,
    backgroundColor: theme.palette.navbar,
  },
}));

const Navbar = ({ collapseDuration = '300ms', history, ...props }) => {
  const [collapseContent, setCollapseContent] = useState('');
  const classes = useStyles();

  return (
    <nav className={classes.nav} onMouseLeave={() => setCollapseContent('')}>
      <Grid
        container
        className={classes.wrapper}
        direction="row"
        justify="space-around"
        alignContent="center"
      >
        {Object.values(domains).map((domain, i) => (
          <Navitem
            onClick={() => history.push(`${domain.title.toLowerCase()}/asdasd`)}
            key={i}
            onMouseOver={() => setCollapseContent(domain.title)}
            title={domain.title}
          />
        ))}
      </Grid>
      <Collapse
        transition={`height ${collapseDuration} cubic-bezier(.4, 0, .2, 1)`}
        isOpen={collapseContent.length !== 0}
      >
        {collapseContent.length !== 0 && (
          <CollapseSection title={collapseContent} domains={domains} />
        )}
      </Collapse>
    </nav>
  );
};

export default withRouter(Navbar);
