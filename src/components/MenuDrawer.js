import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class MenuDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>nothing</List>
        <Divider />
        <List>nothing</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>nothing</List>
        <Divider />
        <List>nothing</List>
      </div>
    );

    return (
      <div>
        <Header onClick={this.toggleDrawer("left", true)} />
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  errors: state.errors
});

export default withRouter(
  connect(mapStateToProps)(withStyles(styles)(MenuDrawer))
);
