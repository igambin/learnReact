import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'Mark', age: 28, clicked: false},
      {name: 'Maik', age: 27, clicked: false},
      {name: 'Monk', age: 25, clicked: false}
    ],
    otherData: 'otherData'
  };

  rotatePeopleHandler = (clickedRowName) => {
    console.log(clickedRowName + ' clicked!');
    let arr = [...this.state.people.slice(1, this.state.people.length), this.state.people[0]];
    arr.forEach(p => p.clicked = false);
    var cP = arr.find(p => p.name === clickedRowName);
    if(clickedRowName && cP){
      cP.clicked = true;
    }
    this.setState(
      {
        people: arr
      });    
    console.log(this.state);
  };

  switchNameHandler = (event) => {
    let target = event.target;
    let name = target.name;
    let newname = target.value;
    console.log("switchNameHandler triggered: " + name + " => " + newname);
    if(name && newname) {
      var cP = this.state.people.find(p => p.name === name);
      if(cP) {
        cP.name = newname;
        this.setState(
          {
            people: this.state.people
          });       
      }
    }
    
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is Ingos first React App</h1>
        <button onClick={() => this.rotatePeopleHandler()}>Switch Name</button>
        <Person click={this.rotatePeopleHandler} changed={this.switchNameHandler} name={this.state.people[0].name} age={this.state.people[0].age} clicked={this.state.people[0].clicked}></Person>
        <Person click={this.rotatePeopleHandler} changed={this.switchNameHandler} name={this.state.people[1].name} age={this.state.people[1].age} clicked={this.state.people[1].clicked}></Person>
        <Person click={this.rotatePeopleHandler} changed={this.switchNameHandler} name={this.state.people[2].name} age={this.state.people[2].age} clicked={this.state.people[2].clicked}></Person>
      </div>
    );
    // the jsx above will be compiled to the following line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is Ingos first React App'));
  }
}

export default App;


  



