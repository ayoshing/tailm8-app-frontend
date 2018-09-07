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
  createCommentAction,
  closeCommentDialogAction,
  getCommentsAction
} from "../redux/actions/commentActions";
import { withRouter } from "react-router-dom";

class CommentDialog extends React.Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleComment = e => {
    e.preventDefault();
    let commentData = {
      content: this.state.content
    };

    this.props.createCommentAction(
      commentData,
      this.props.postId,
      this.props.history
    );
    this.props.closeCommentDialogAction();
  };

  handleClose = () => {
    this.props.closeCommentDialogAction();
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
          <DialogTitle id="form-dialog-title">Add Comment</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="content"
              placeholder="Comment"
              fullWidth
              multiline
              rows="2"
              value={this.state.content}
              onChange={this.handleChange}
              name="content"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleComment} color="primary">
              Post Comment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.comment.dialogOpen,
  postId: state.comment.postId
});

export default withRouter(
  connect(
    mapStateToProps,
    { createCommentAction, closeCommentDialogAction, getCommentsAction }
  )(CommentDialog)
);
