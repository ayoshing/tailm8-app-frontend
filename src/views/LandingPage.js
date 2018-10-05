import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import { clearErrorsAction } from "../redux/actions/postActions";
import { connect } from "react-redux";

class LandingPage extends Component {
  handleClick = () => {
    this.props.clearErrorsAction();
  };

  render() {
    return (
      <Grid
        container
        spacing={16}
        alignItems="center"
        justify="center"
        direction="column"
      >
        <Grid item xs>
          <LoginForm />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/signup"
            style={{ marginTop: 50, backgroundColor: "chocolate" }}
            onClick={this.handleClick}
          >
            Create An Account
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  null,
  { clearErrorsAction }
)(LandingPage);
