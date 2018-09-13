import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: 320
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

class SimpleAppBar extends React.Component {
  handleCardArea = () => {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardActionArea
            className={classes.card}
            onClick={this.handleCardArea}
          >
            <CardHeader
              avatar={
                <Avatar aria-label="Post" className={classes.avatar}>
                  T
                </Avatar>
              }
              title={this.props.userName}
              subheader="something"
            />
            {this.props.imgUrl ? (
              <CardMedia
                className={classes.media}
                image={this.props.imgUrl}
                title="Dogs"
              />
            ) : null}
            <CardContent>
              <Typography component="p">
                <strong>{this.props.userName}: </strong>
                {this.props.content}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Comment" onClick={this.handleCommentClick}>
              <ChatBubbleOutlineIcon />
            </IconButton>

            {/* TODO: stretch goal share feature
          <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}
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
          <CardContent>
            <Typography paragraph variant="body2">
              {this.props.comments ? this.props.comments.length : 0} Comments
            </Typography>
            {this.renderComments()}
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);
