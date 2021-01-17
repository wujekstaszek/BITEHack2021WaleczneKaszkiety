import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
import CardContent from '@material-ui/core/CardContent';
import NavigationIcon from '@material-ui/icons/Navigation';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const { useState } = React;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
    minWidth: '900px',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  transformation: {
    marginRight: theme.spacing(1),
    transform: 'rotate(180deg)',
  },

  link: {
    color: theme.inherit,
  },
}));

const LinkBox = (props) => {
  let {
    text = '',
    link = '',
    upvoted = 12,
    downvoted = 1,
    comments = '',
  } = props.post;
  const [upCount, setUpCount] = useState(upvoted);
  const incrementCount = () => {
    setUpCount(+upCount + 1);
  };

  const [downCount, setDownCount] = useState(downvoted);
  const decrementCount = () => {
    setDownCount(+downCount - 1);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Fab
              variant="extended"
              target={'_blank'}
              href={link}
              className={classes.link}
            >
              {text}
            </Fab>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {link}
          </Typography>
        </CardContent>
        <Button onClick={incrementCount}>
          <NavigationIcon className={classes.extendedIcon} />+{upCount}
        </Button>
        <Button onClick={decrementCount}>
          <NavigationIcon className={classes.transformation} />
          {downCount}
        </Button>
        <Button>
          <ChatBubbleOutlineIcon className={classes.extendedIcon} />
          {comments.length}
        </Button>
      </Card>
    </div>
  );
};

export default LinkBox;
