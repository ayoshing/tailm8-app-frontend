import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import UserAdapter from "../apis/UserAdapter";
import { LOGOUT_CURRENT_USER } from "../redux/actions/types";

const styles = {
  root: {
    flexGrow: 1
  }
};

const handleClick = props => {
  props.dispatch({ type: LOGOUT_CURRENT_USER });
  UserAdapter.clearToken();
  props.history.push("/");
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid
            container
            spacing={16}
            alignItems="center"
            justify="space-between"
            direction="row"
          >
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="subheading" color="inherit">
                  Tailm8
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              {props.auth.isAuthenticated ? (
                <Button
                  variant="contained"
                  color="secondary"
                  justify="flex-end"
                  onClick={() => handleClick(props)}
                >
                  Logout
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(SimpleAppBar))
);
