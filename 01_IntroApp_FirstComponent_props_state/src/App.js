import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { personId: '1', name: 'Mark', age: 28 },
      { personId: '2', name: 'Maik', age: 27 },
      { personId: '3', name: 'Monk', age: 25 }
    ],
    otherData: 'otherData',
    showPeople: false
  };

  switchNameHandler = (event) => {
    const target = event.target;
    const personId = target.name;
    const newname = target.value;
    console.log("switchNameHandler triggered on Person '" + personId + "' => " + newname);
    if (personId && newname) {
      const cP = this.state.people.find(p => p.personId === personId);
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
    this.setState(
      {
        showPeople: !this.state.showPeople
      });
    console.log("togglePeople");
    console.log(this.state);
  };

  deletePerson = (idx) => {
    if(Number.isFinite(idx)) {
      const dP = this.state.people[idx];
      if(dP)
        console.log("deletePerson triggered on Peron '" + dP.name + "'");
        const newPeople = [...this.state.people];
        newPeople.splice(idx, 1);
        this.setState(
          {
            people: newPeople
          }
        );
    }
    console.log("deletePerson");
    console.log(this.state);
  }
  
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

    if (this.state.showPeople) {
      persons = (
        <div style={style2}>
          {this.state.people.map((p, idx) => {
            return (
              <Person
                click={() => this.deletePerson(idx)}
                changed={this.switchNameHandler}
                personId={p.personId}
                name={p.name}
                age={p.age}
                clicked={p.clicked} 
                key={p.personId}
                />
            );
          })}
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
        {persons}
      </div>
    );
  }
}

export default App;






