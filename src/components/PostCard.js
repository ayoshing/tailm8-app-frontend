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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {
  openCommentDialogAction,
  getCommentsAction
} from "../redux/actions/commentActions";
import { connect } from "react-redux";

const styles = theme => ({
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
  },
  "@media (min-width: 600px)": {
    card: {
      width: 600
    }
  }
});

class PostCard extends React.Component {
  state = { expanded: false };

  componentDidMount() {
    this.props.getCommentsAction(this.props._id);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleCommentClick = () => {
    this.props.openCommentDialogAction(this.props._id);
  };

  handleLikeClick = () => {
    console.log("click like");
  };

  renderComments = () => {
    this.props.comments.map(comment => {
      return (
        <Typography>
          <strong>{comment.userName}: </strong>
          {comment.content}
        </Typography>
      );
    });
  };

  render() {
    const { classes } = this.props;

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
            image={this.props.imgUrl}
            title="Dogs"
          />
          <CardContent>
            <Typography component="p">
              <strong>1,000,000 Likes</strong>
            </Typography>
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
          <IconButton aria-label="Like" onClick={this.handleLikeClick}>
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
              {this.props.comments ? this.props.comments.length : 0} Comments
            </Typography>
            {this.renderComments()}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

PostCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comments: state.comment.comments.comments
});

export default connect(
  mapStateToProps,
  { openCommentDialogAction, getCommentsAction }
)(withStyles(styles)(PostCard));
