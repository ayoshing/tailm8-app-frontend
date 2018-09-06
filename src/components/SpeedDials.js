import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import CreateIcon from "@material-ui/icons/Create";
import ChatIcon from "@material-ui/icons/Chat";
import EventIcon from "@material-ui/icons/Event";
import { connect } from "react-redux";
import {
  clickedPostDial,
  clickedChatDial,
  clickedEventDial
} from "../redux/actions/postActions";

const styles = theme => ({
  root: {
    height: 380
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing.unit * 7,
    right: theme.spacing.unit * 3
  }
});

const actions = [
  { icon: <CreateIcon />, name: "Post" },
  { icon: <ChatIcon />, name: "Chat" },
  { icon: <EventIcon />, name: "Event" }
];

class SpeedDials extends React.Component {
  state = {
    open: false,
    hidden: false
  };

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  handleClickAction = dialAction => {
    switch (dialAction) {
      case "Post":
        this.props.postDialog();
        this.props.postDial(dialAction);
      case "Chat":
        this.props.chatDial(dialAction);
      case "Event":
        this.props.eventDial(dialAction);
    }
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    let isTouch;
    if (typeof document !== "undefined") {
      isTouch = "ontouchstart" in document.documentElement;
    }

    return (
      <div className={classes.root}>
        {/* <Button onClick={this.handleVisibility}>Toggle Speed Dial</Button> */}
        <SpeedDial
          ariaLabel="SpeedDial"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onBlur={this.handleClose}
          onClick={this.handleClick}
          onClose={this.handleClose}
          onFocus={isTouch ? undefined : this.handleOpen}
          onMouseEnter={isTouch ? undefined : this.handleOpen}
          onMouseLeave={this.handleClose}
          open={open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => this.handleClickAction(action.name)}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  post: state.post,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  postDial: dialAction => dispatch(clickedPostDial(dialAction)),
  chatDial: dialAction => dispatch(clickedChatDial(dialAction)),
  eventDial: dialAction => dispatch(clickedEventDial(dialAction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SpeedDials));
