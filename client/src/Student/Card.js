import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  componentDidMount() {
    axios
      .get(`http://localhost:3000/student/pass`)
      .then(res => this.setState({ pass: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    if (this.state.pass !== "") {
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              {this.state.parentApproval ? "Approve" : "Not Approve"}
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
            <Typography component="p">
              {`Parent ${
                this.state.pass.parentApproval ? "Approve" : "Not Approve"
              } It`}
              <Typography component="p">{`Mentor ${
                this.state.pass.mentorApporval ? "Approve" : "Not Approve"
              } It`}</Typography>
              <Typography component="p">{`Warden ${
                this.state.pass.wardenApproval ? "Approve" : "Not Approve"
              } It`}</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Extend</Button>
          </CardActions>
        </Card>
      );
    }
    return <div>Hello</div>;
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
