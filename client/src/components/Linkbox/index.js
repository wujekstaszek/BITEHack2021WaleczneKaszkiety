import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Box } from "@material-ui/core";
// import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from '@material-ui/core/CardMedia';
import NavigationIcon from "@material-ui/icons/Navigation";

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
  }
}));
class LinkBox extends React.Component
{

  constructor(props)
  {
    super();
    this.state = { color: "red" };
    this.link;
    this.classes = useStyles();
    this.bull = <span className={classes.bullet}>•</span>;
    this.preventDefault = (event) => event.preventDefault();

  }

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link
              href="khan-academy.com"
              onClick={this.preventDefault}
              color="inherit"
            >
              khan-academy.com
            </Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bardzo fajna strona.
          </Typography>
        </CardContent>
        {/* <Fab variant="extended"> */}
        <Button>
          <NavigationIcon className={classes.extendedIcon} />
        </Button>
        <Button>
          <NavigationIcon className={classes.transformation} />
        </Button>
        {/* <Box component="span" m={1}> */}
        {/* <Button /> */}
        {/* <Typography variant="body2" color="textSecondary"> */}
        100
        {/* </Typography> */}
        {/* </Box> */}
        {/* </Fab> */}
      </Card>
    </div>
    );
  }
}

export default LinkBox;