import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import SpeedDials from "./SpeedDials";
import { createPostAction } from "../redux/actions/postActions";
import { withRouter } from "react-router-dom";

class PostDialog extends React.Component {
  state = {
    open: false,
    content: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handlePost = e => {
    e.preventDefault();
    let postData = {
      content: this.state.content
    };

    this.props.createPostAction(postData, this.props.history);
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        {/* <Button onClick={this.handleClickOpen}>Open form dialog</Button> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          maxWidth="lg"
        >
          <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Editor Toggle Buttons Will Go Here
            </DialogContentText>
            <TextField
              autoFocus
              // margin="dense"
              id="post"
              placeholder="Bark, Meow, Moo..."
              fullWidth
              multiline
              rows="4"
              value={this.state.content}
              onChange={this.handleChange}
              name="content"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handlePost} color="primary">
              Post
            </Button>
          </DialogActions>
        </Dialog>
        <SpeedDials postDialog={this.handleClickOpen} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default withRouter(
  connect(
    mapStateToProps,
    { createPostAction }
  )(PostDialog)
);
