import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { logOutUserAction } from "../redux/actions/authActions";
import { resetProfileAction } from "../redux/actions/profileActions";

const styles = {
  root: {
    flexGrow: 1
  }
};

const handleClick = props => {
  props.logOutUserAction();
  props.resetProfileAction();
  localStorage.removeItem("jwt");
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
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="subheading" color="inherit">
                  Tailm8
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              {localStorage.jwt ? (
                <Button
                  color="inherit"
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
  profile: state.profile,
  errors: state.errors
});

export default withRouter(
  connect(
    mapStateToProps,
    { logOutUserAction, resetProfileAction }
  )(withStyles(styles)(SimpleAppBar))
);
