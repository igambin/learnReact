import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { personId: '1', name: 'Mark', age: 28, clicked: false },
      { personId: '2', name: 'Maik', age: 27, clicked: false },
      { personId: '3', name: 'Monk', age: 25, clicked: false }
    ],
    otherData: 'otherData',
    showPeople: false
  };

  rotatePeopleHandler = (clickedPersonId) => {
    console.log(clickedPersonId + ' clicked!');
    let arr = [...this.state.people.slice(1, this.state.people.length), this.state.people[0]];
    arr.forEach(p => p.clicked = false);
    var cP = arr.find(p => p.personId === clickedPersonId);
    if (clickedPersonId && cP) {
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
    let personId = target.name;
    let newname = target.value;
    console.log("switchNameHandler triggered on Person '" + personId + "' => " + newname);
    if (personId && newname) {
      var cP = this.state.people.find(p => p.personId === personId);
      if (cP) {
        cP.name = newname;
        this.setState(
          {
            people: this.state.people
          });
      }
    }
  };

  togglePeopleHandler = () => {
    const doShowPeople = !this.state.showPeople;
    this.setState(
      {
        showPeople: doShowPeople
      });
      console.log(this.state);
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const style2 = {
      margin: '50px'
    };

    let persons = null;

    if(this.state.showPeople) {
      persons = (
        <div style={style2}>
        <Person
          click={this.rotatePeopleHandler}
          changed={this.switchNameHandler}
          personId={this.state.people[0].personId}
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          clicked={this.state.people[0].clicked} />
        <Person
          click={this.rotatePeopleHandler}
          changed={this.switchNameHandler}
          personId={this.state.people[1].personId}
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          clicked={this.state.people[1].clicked} />
        <Person
          click={this.rotatePeopleHandler}
          changed={this.switchNameHandler}
          personId={this.state.people[2].personId}
          name={this.state.people[2].name}
          age={this.state.people[2].age}
          clicked={this.state.people[2].clicked} />
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, this is Ingos first React App</h1>
        <button
          style={style}
          onClick={() => this.togglePeopleHandler()}>
            Toggle 'ShowPeople'
          </button>
        <button
          style={style}
          onClick={() => this.rotatePeopleHandler()}>
          Rotate Entries
        </button>
        {persons}
      </div>
    );
  }
}

export default App;






