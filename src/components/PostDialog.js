import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import {
  createPostAction,
  closeDialogAction
} from "../redux/actions/postActions";
import { withRouter } from "react-router-dom";

class PostDialog extends React.Component {
  state = {
    content: ""
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
    this.props.closeDialogAction();
  };

  handleClose = () => {
    this.props.closeDialogAction();
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Dialog
          open={this.props.open}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.post.dialogOpen
});

export default withRouter(
  connect(
    mapStateToProps,
    { createPostAction, closeDialogAction }
  )(PostDialog)
);
