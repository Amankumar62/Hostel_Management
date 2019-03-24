import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexDirection: "row",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Click Here to Login</h1>
      <div className={classes.root}>
        <List component="nav">
          <Link to="/student/login" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText className="flex-item" primary="Student" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/parent/login" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary="Parent" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/mentor/login" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary="Mentor" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/warden/login" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary="Warden" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/securityGuard/login" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText primary="Guards" />
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
