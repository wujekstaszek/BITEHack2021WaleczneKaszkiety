import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import LinkBox from '../../components/LinkBox';

const useStyles = makeStyles((theme) => ({
  main: {
    width: `${theme.feedWidth}px`,
    minHeight: '100vh',
    margin: '0 auto',
  },
}));

const Feed = ({ posts }) => {
  const classes = useStyles();

  const sortedPosts = posts.sort((a, b) => b.upvoted - a.upvoted);
  return (
    <Grid
      container
      justify="flex-start"
      direction="column"
      className={classes.main}
    >
      {sortedPosts &&
        sortedPosts.map((post) => <LinkBox key={post.post_id} post={post} />)}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  posts: state.feed.posts,
});

export default connect(mapStateToProps)(Feed);
