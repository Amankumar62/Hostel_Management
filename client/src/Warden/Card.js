import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

import axios from "axios";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends React.Component {
  state = {
    pass: ""
  };
  constructor(props) {
    super(props);
    this.approve = this.approve.bind(this);
    this.decline = this.decline.bind(this);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/warden/pass`)
      .then(res => this.setState({ pass: res.data[0] }))
      .catch(err => console.log(err));
  }
  approve(event) {
    axios
      .get(`http://localhost:3000/warden/pass/yes/${this.state.pass._id}`)
      .then(res => this.setState({ pass: res.data }))
      .catch(err => console.log(err));
  }
  decline(event) {
    axios
      .get(`http://localhost:3000/warden/pass/no/${this.state.pass._id}`)
      .then(res => this.setState({ pass: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    console.log(this.state.pass);
    if (this.state.pass !== "") {
      if (this.state.pass.wardenApproval)
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary" variant="h6" gutterBottom>
                {this.state.wardenApproval ? "Approve" : "Not Approve"}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Date{" "}
                {`${this.state.pass.inDate.substring(
                  0,
                  10
                )} / ${this.state.pass.outDate.substring(0, 10)}`}
              </Typography>
              <Typography variant="h5" component="h2">
                {this.state.pass.studentDetail.name}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {`Roll Number : ${this.state.pass.studentDetail.rollNumber}`}
                <Typography className={classes.pos} color="textSecondary">
                  {`${this.state.pass.studentDetail.branch} ${
                    this.state.pass.studentDetail.group
                  } ${this.state.pass.studentDetail.section} ${
                    this.state.pass.studentDetail.year
                  }`}
                </Typography>
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {`${this.state.pass.studentDetail.contactNumber}`}
              </Typography>
              <Typography component="p">{`PURPOSE : ${
                this.state.pass.purpose
              }`}</Typography>
              <br />
              <Typography variant="h6" component="p">{`You ${
                this.state.pass.wardenApproval ? "Approve" : "Not Approve"
              } It`}</Typography>
            </CardContent>
            <CardActions>
              <Link to="/warden" style={{ textDecoration: "none" }}>
                <Button onClick={this.approve} size="small">
                  Approve
                </Button>
              </Link>
              <Button onClick={this.decline} size="small">
                Decline
              </Button>
            </CardActions>
          </Card>
        );
      if (!this.state.pass.wardenApproval)
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom>
                {this.state.wardenApproval ? "Approve" : "Not Approve"}
              </Typography>
              <Typography variant="h5" component="h2">
                {this.state.pass.studentDetail.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {`${this.state.pass.inDate.substring(
                  0,
                  10
                )} / ${this.state.pass.outDate.substring(0, 10)}`}
              </Typography>
              <Typography component="p">{this.state.pass.purpose}</Typography>
              <br />
              <Typography variant="h6" component="p">{`You ${
                this.state.pass.wardenApproval ? "Approve" : "Not Approve"
              } It`}</Typography>
            </CardContent>
            <CardActions>
              <Link to="/warden" style={{ textDecoration: "none" }}>
                <Button onClick={this.approve} size="small">
                  Approve
                </Button>
              </Link>
              <Button onClick={this.decline} size="small">
                Decline
              </Button>
            </CardActions>
          </Card>
        );
    }
    return <div>Loading</div>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
