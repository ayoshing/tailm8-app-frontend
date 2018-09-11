import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { logOutUserAction } from "../redux/actions/authActions";
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250
  }
};

const Menu = props => {
  const handleClick = () => {
    props.logOutUserAction();
    localStorage.removeItem("jwt");
  };

  const { classes } = props;

  return (
    <div className={classes.list}>
      <List>
        <div>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Avatar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={props.userName} />
          </ListItem>
        </div>
      </List>
      <Divider />
      <Link to="/profile/edit" style={{ textDecoration: "none" }}>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="My Petfile" />
        </ListItem>
      </Link>
      {/* <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites*" />
      </ListItem> */}
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Settings(Display Only)" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Help Center(Display Only)" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userName: state.profile.profile.userName
});

export default connect(
  mapStateToProps,
  { logOutUserAction }
)(withStyles(styles)(Menu));
