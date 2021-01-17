import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import NavigationIcon from "@material-ui/icons/Navigation";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  transformation: {
    marginRight: theme.spacing(1),
    transform: "rotate(180deg)"
  },

  link: {
    color: theme.inherit
  }
}));

const LinkBox = (props) =>
{
    const classes = useStyles();
    let { link, upvotes, downvotes, nComments} = props;
    const preventDefault = (event) => event.preventDefault();
    link = "https://" + link

    return (
      <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <a target="_blank"
              href={link}
              className={classes.link}
            >
              {link}
            </a>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bardzo fajna strona.
          </Typography>
        </CardContent>
        {/* <Fab variant="extended"> */}
        <Button>
          <NavigationIcon className={classes.extendedIcon} />
        +{upvotes}
        </Button>
        <Button>
          <NavigationIcon className={classes.transformation} />
        -{downvotes}
        </Button>
        <Button>
         <ChatBubbleOutlineIcon className={classes.extendedIcon} />
        {nComments}
        </Button>
      </Card>
    </div>
    );
  }

export default LinkBox;