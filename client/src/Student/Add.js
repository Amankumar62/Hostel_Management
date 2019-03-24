import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SnackBar from "./SnackBar";

import axios from "axios";

class Add extends React.Component {
  state = {
    mentor: "",
    parent: "",
    warden: ""
  };
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    this.setState({
      result: ""
    });
  };
  handleSubmit1(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/addParent", {
        parentId: this.state.parent
      })
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

  handleSubmit2(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/addMentor", {
        employeeId: this.state.mentor
      })
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }
  handleSubmit3(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/addWarden", {
        employeeId: this.state.warden
      })
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.result)
      return (
        <div style={{ textAlign: "center" }}>
          <SnackBar result={this.state.result} />
          <form onSubmit={this.handleSubmit1}>
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Parent Id"
              name="parent"
              id="parent"
            />
            <br />
            <Button
              style={{ margin: "auto", width: "210px" }}
              color="primary"
              variant="outlined"
              type="submit">
              Add Parent
            </Button>
          </form>
          <br />
          <form onSubmit={this.handleSubmit2}>
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Mentor Employee Id"
              name="mentor"
              id="mentor"
            />
            <br />
            <Button
              style={{ margin: "auto", width: "210px" }}
              color="primary"
              variant="outlined"
              type="submit">
              Add Mentor
            </Button>
          </form>
          <br />

          <form onSubmit={this.handleSubmit3}>
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Warden Employee Id"
              name="warden"
              id="warden"
            />
            <br />
            <Button
              style={{ margin: "auto", width: "210px" }}
              color="primary"
              variant="outlined"
              type="submit">
              Add Warden
            </Button>
          </form>
          <br />
        </div>
      );
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit1}>
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Parent Id"
            name="parent"
            id="parent"
          />
          <br />
          <Button
            style={{ margin: "auto", width: "210px" }}
            color="primary"
            variant="outlined"
            type="submit">
            Add Parent
          </Button>
        </form>
        <br />
        <form onSubmit={this.handleSubmit2}>
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Mentor Employee Id"
            name="mentor"
            id="mentor"
          />
          <br />
          <Button
            style={{ margin: "auto", width: "210px" }}
            color="primary"
            variant="outlined"
            type="submit">
            Add Mentor
          </Button>
        </form>
        <br />

        <form onSubmit={this.handleSubmit3}>
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Warden Employee Id"
            name="warden"
            id="warden"
          />
          <br />
          <Button
            style={{ margin: "auto", width: "210px" }}
            color="primary"
            variant="outlined"
            type="submit">
            Add Warden
          </Button>
        </form>
        <br />
      </div>
    );
  }
}

export default Add;
