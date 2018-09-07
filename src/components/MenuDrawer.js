import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeMenuAction } from "../redux/actions/profileActions";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const styles = {
  list: {
    width: 250
  }
};
class MenuDrawer extends React.Component {
  toggleDrawer = () => {
    this.props.closeMenuAction();
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.left} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
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
  left: state.profile.menuOpen
});

export default connect(
  mapStateToProps,
  { closeMenuAction }
)(withRouter(withStyles(styles)(MenuDrawer)));
