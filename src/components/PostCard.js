import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const styles = theme => ({
  card: {
    width: 300
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "turquoise"
  }
});

class PostCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Card className={classes.card}>
        <CardActionArea className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Post" className={classes.avatar}>
                T
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.userName}
            subheader="September 6, 2018"
          />
          <CardMedia
            className={classes.media}
            image="https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/All-about-puppies--Cesar%E2%80%99s-tips%2C-tricks-and-advice.jpg?itok=bi9xUvwe"
            title="Dogs"
          />
          <CardContent>
            <Typography component="p">{this.props.content}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton aria-label="Like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Comment User
            </Typography>
            <Typography paragraph>3 Comments</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostCard);
