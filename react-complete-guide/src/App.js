import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'Mark', age: 28},
      {name: 'Maik', age: 27},
      {name: 'Monk', age: 25}
    ]
  }

  rotatePeopleHandler = () => {
    let arr = [...this.state.people.slice(1, this.state.people.length), this.state.people[0]];
    this.setState(
      {people: arr}
      );    
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is Ingos first React App</h1>
        <button onClick={this.rotatePeopleHandler}>Rotate People</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}></Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}></Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}></Person>
      </div>
    );
    // the jsx above will be compiled to the following line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is Ingos first React App'));
  }
}

export default App;
