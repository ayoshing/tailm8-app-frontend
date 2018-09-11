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
import { openMenuAction } from "../redux/actions/profileActions";

const styles = {
  root: {
    flexGrow: 1
  }
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
            // justify="flex-end"
            direction="row"
          >
            {localStorage.jwt ? (
              <Grid item>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon onClick={() => props.openMenuAction()} />
                </IconButton>
              </Grid>
            ) : null}
            <Grid item>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography variant="title" color="inherit">
                  TAILM8
                </Typography>
              </Link>
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
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUserAction, openMenuAction }
)(withRouter(withStyles(styles)(SimpleAppBar)));
