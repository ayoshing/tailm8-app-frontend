import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SnackBar from "./SnackBar";
import PostDialog from "./PostDialog";
import CommentDialog from "./CommentDialog";
import Navigation from "./Navigation";
import PostCardContainer from "../views/PostCardContainer";
import ProfileForm from "./ProfileForm";
import Loading from "./Loading";
import SpeedDials from "./SpeedDials";
import MenuDrawer from "./MenuDrawer";

class Dashboard extends Component {
  isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0);

  loadDisplay = () => {
    if (
      this.isEmpty(this.props.profile.profile) &&
      this.props.profile.loading
    ) {
      return <Loading />;
    } else if (
      this.isEmpty(this.props.profile.profile) &&
      !this.props.profile.loading
    ) {
      return <Redirect to="/profile/edit" />;
    } else {
      return <PostCardContainer />;
    }
  };

  render() {
    return (
      <Fragment>
        {this.loadDisplay()}
        <MenuDrawer />
        <SnackBar />
        <CommentDialog />
        <PostDialog />
        <SpeedDials />
        <Navigation />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors,
  post: state.post
});

export default connect(mapStateToProps)(Dashboard);
