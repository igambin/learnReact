import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: "Mark"
  };

  dataEntered = (event) => {
    let target = event.target;
    let input = target.value;
    console.log("dataEntered: " + input);
    this.setState(
      {
        username: input
      });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          dataEntered={this.dataEntered}
          input={this.state.username} />
        <div>
          <UserOutput
            p1={this.state.username}
            p2="Hello1" />
          <UserOutput
            p1={this.state.username}
            p2="Hello2" />
          <UserOutput
            p1={this.state.username}
            p2="Hello3" />
          <UserOutput
            p1={this.state.username}
            p2="Hello4" />
        </div>
      </div>
    );
  }
}

export default App;
