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
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    width: "100%"
  },
  avatar: {
    backgroundColor: "chocolate"
  }
});

class SimpleAppBar extends React.Component {
  handleCardArea = () => {};

  postCount = () => {
    return this.props.posts.filter(post => {
      console.log(post.profile, this.props.profile._id);
      return post.profile === this.props.profile._id;
    }).length;
  };

  likeCount = () => {
    return this.props.posts.forEach(post => {
      post.likes.filter(like => {
        return like.profile === this.props.profile._id;
      });
    }).length;
  };

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
                <Avatar aria-label="Profile" className={classes.avatar}>
                  T
                </Avatar>
              }
              title={this.props.profile.userName}
              subheader={this.props.user.name}
            />
            <CardContent>
              <Typography variant="body2">0 Furiends</Typography>
              <Typography variant="body2">{this.postCount()} Posts</Typography>
              <Typography variant="body2">0 Likes</Typography>
            </CardContent>
          </CardActionArea>

          <CardContent>
            <Typography paragraph variant="body2">
              Bio: {this.props.profile.bio}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  posts: state.post.posts
});

export default connect(mapStateToProps)(withStyles(styles)(SimpleAppBar));
