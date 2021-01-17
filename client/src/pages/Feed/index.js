import React from 'react';
import { Grid, makeStyles, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import LinkBox from '../../components/LinkBox';

const useStyles = makeStyles((theme) => ({
  main: {
    width: `${theme.feedWidth}px`,
    minHeight: '100vh',
    margin: '0 auto',
  },
  loader: {
    position: 'absolute',
    left: '50%',
    top: '40vh',
    width: '100px',
    height: '100px',

    transform: 'translateX(-50%)',
  },
}));

const Feed = ({ posts, loading }) => {
  const classes = useStyles();

  const sortedPosts = posts.sort((a, b) => b.upvoted - a.upvoted);
  return (
    <Grid
      container
      justify="flex-start"
      direction="column"
      className={classes.main}
    >
      {sortedPosts.length !== 0
        ? sortedPosts.map((post) => <LinkBox key={post.post_id} post={post} />)
        : loading && (
            <div className={classes.loader}>
              <CircularProgress size={100}></CircularProgress>
            </div>
          )}
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  posts: state.feed.posts,
  loading: state.feed.loading,
});

export default connect(mapStateToProps)(Feed);
