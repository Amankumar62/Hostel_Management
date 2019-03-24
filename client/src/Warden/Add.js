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
      .post("http://localhost:3000/parent/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        parentId: this.state.parentId,
        type: this.state.type
      })
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }

  handleSubmit2(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/mentor/register", {
        name: this.state.name,
        email: this.state.email,
        phoneNo: this.state.phoneNo,
        password: this.state.password,
        employeeId: this.state.employeeId,
        type: this.state.type
      })
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }
  handleSubmit3(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/register", {
        name: this.state.name,
        password: this.state.password,
        registrationNumber: this.state.registrationNumber,
        rollNumber: this.state.rollNumber,
        branch: this.state.branch,
        year: this.state.year,
        course: this.state.course,
        group: this.state.group,
        section: this.state.section,
        type: this.state.type,
        contactNumber: this.state.contactNumber
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
              label="Name"
              name="parent"
              id="name"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Email"
              name="parent"
              id="email"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Phone No"
              name="parent"
              id="phoneNo"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Password"
              name="parent"
              type="password"
              id="password"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Parent Id"
              name="parent"
              id="parentId"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Type"
              name="parent"
              id="type"
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
              label="Name"
              name="parent"
              id="name"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Email"
              name="parent"
              id="email"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Phone No"
              name="parent"
              id="phoneNo"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Password"
              name="parent"
              id="password"
              type="password"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Employee Id"
              name="parent"
              id="employeeId"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Type"
              name="parent"
              id="type"
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
              label="Name"
              id="name"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Password"
              id="password"
              type="password"
              autoComplete="nope"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Registration Number"
              id="registrationNumber"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Roll Number"
              id="rollNumber"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Branch"
              id="branch"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Year"
              id="year"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Section"
              id="section"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Group"
              id="group"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Type"
              id="type"
            />
            <br />
            <TextField
              color="primary"
              onChange={this.handleChange}
              variant="outlined"
              label="Contact Number"
              id="contactNumber"
            />
            <br />

            <Button
              style={{ margin: "auto", width: "210px" }}
              color="primary"
              variant="outlined"
              type="submit">
              Add Student
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
            label="Name"
            name="parent"
            id="name"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Email"
            name="parent"
            id="email"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Phone No"
            name="parent"
            id="phoneNo"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Password"
            name="parent"
            type="password"
            id="password"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Parent Id"
            name="parent"
            id="parentId"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Type"
            name="parent"
            id="type"
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
            label="Name"
            name="parent"
            id="name"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Email"
            name="parent"
            id="email"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Phone No"
            name="parent"
            id="phoneNo"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Password"
            name="parent"
            id="password"
            type="password"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Employee Id"
            name="parent"
            id="employeeId"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Type"
            name="parent"
            id="type"
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
            label="Name"
            id="name"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Password"
            id="password"
            type="password"
            autoComplete="nope"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Registration Number"
            id="registrationNumber"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Roll Number"
            id="rollNumber"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Branch"
            id="branch"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Year"
            id="year"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Section"
            id="section"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Group"
            id="group"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Type"
            id="type"
          />
          <br />
          <TextField
            color="primary"
            onChange={this.handleChange}
            variant="outlined"
            label="Contact Number"
            id="contactNumber"
          />
          <br />

          <Button
            style={{ margin: "auto", width: "210px" }}
            color="primary"
            variant="outlined"
            type="submit">
            Add Student
          </Button>
        </form>
        <br />
      </div>
    );
  }
}

export default Add;
