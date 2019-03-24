import React from "react";
import AppBar from "./AppBar";
import Bottom from "./BottomNavbar";
import setAuthToken from "../utils/setAuthToken";

import axios from "axios";

class App extends React.Component {
  state = {
    student: null
  };
  componentDidMount() {
    setAuthToken();
    axios
      .get(`http://localhost:3000/student/current`)
      .then(res => this.setState({ student: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.student)
      return (
        <div>
          <AppBar student={this.state.student} />
          <Bottom student={this.state.student} />
        </div>
      );
    return <div>Loading</div>;
  }
}

export default App;
