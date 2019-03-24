import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

class FadeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose3 = this.handleClose3.bind(this);
  }

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClose3 = event => {
    localStorage.removeItem("jwtToken");
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          style={{ padding: 0, margin: 0, color: "white" }}
          onClick={this.handleClick}>
          <MoreIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
          style={{ marginRight: "50px" }}>
          <MenuItem onClick={this.handleClose}>Fee Details</MenuItem>
          <MenuItem onClick={this.handleClose}>Report</MenuItem>
          <MenuItem onClick={this.handleClose}>Pass Status</MenuItem>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem onClick={this.handleClose3}>Logout</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
