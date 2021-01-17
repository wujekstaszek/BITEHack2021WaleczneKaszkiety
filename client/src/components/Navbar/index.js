import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid } from '@material-ui/core';
import Navitem from '../Navitem';
import Collapse from '@kunukn/react-collapse';
import CollapseSection from '../CollapseSection';
import { withRouter } from 'react-router-dom';

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

const Navbar = ({ fields, collapseDuration = '300ms', history, ...props }) => {
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
        {fields &&
          fields.map(({ fieldId, name }) => (
            <Navitem
              key={fieldId}
              onMouseOver={(e) => setCollapseContent(name)}
              title={name}
            />
          ))}
      </Grid>
      <Collapse
        transition={`height ${collapseDuration} cubic-bezier(.4, 0, .2, 1)`}
        isOpen={collapseContent.length !== 0}
      >
        {collapseContent.length !== 0 && (
          <CollapseSection title={collapseContent} fields={fields} />
        )}
      </Collapse>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  fields: state.fields.fields,
});

export default withRouter(connect(mapStateToProps)(Navbar));
