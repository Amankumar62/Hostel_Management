import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.state = {
      indate: "2019-03-26",
      outdate: "2019-03-27",
      purpose: ""
    };
  }
  handleSubmit1(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/student/pass", this.state)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit1}>
        <TextField
          id="indate"
          label="Birthday"
          type="date"
          onChange={this.handleChange}
          defaultValue="2019-03-26"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outdate"
          label="Birthday"
          type="date"
          onChange={this.handleChange}
          defaultValue="2019-03-27"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          color="primary"
          onChange={this.handleChange}
          variant="outlined"
          label="Purpose"
          name="purpose"
          id="purpose"
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
    );
  }
}

export default App;
