import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid } from '@material-ui/core';
import Navitem from '../Navitem';
import Collapse from '@kunukn/react-collapse';
import CollapseSection from '../CollapseSection';
import { withRouter } from 'react-router-dom';

import { fetchFeed as getFeed } from '../../store/actions/feed';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'absolute',
    top: `${theme.topBarHeight}px`,
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.75)',
    backgroundColor: theme.palette.navbar,
    zIndex: theme.zIndex.appBar,
  },
  wrapper: {
    width: '100vw',
    height: `${theme.navbarHeight}px`,
    backgroundColor: theme.palette.navbar,
  },
}));

const Navbar = ({
  fields,
  collapseDuration = '300ms',
  history,
  fetchFeed,
  ...props
}) => {
  const [collapseContent, setCollapseContent] = useState('');
  const classes = useStyles();

  // dont do that, worst navigation ever, shit happens
  const handleNavitemClick = (tagId, domainBase) => {
    const url = domainBase.toLowerCase();
    history.push(url);
    fetchFeed(tagId);
  };

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
              onClick={() => handleNavitemClick(fieldId, name)}
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
          <CollapseSection
            handleClick={handleNavitemClick}
            domain={collapseContent}
            fields={fields}
          />
        )}
      </Collapse>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  fields: state.fields.fields,
});

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: (tagId) => dispatch(getFeed(tagId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
