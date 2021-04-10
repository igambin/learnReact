import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
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

  switchNameHandler = (event, id) => {
    const newname = event.target.value;
    console.log("switchNameHandler triggered on Person '" + id + "' => " + newname);
    if (id) {
      // clone list
      const persons = [...this.state.people];
      const idx = persons.findIndex(p => p.personId === id);
      if (idx >= 0) {

        // clone person
        const person = { ...persons[idx] };
        person.name = newname; // then modify person
        persons[idx] = person; // then modify list

        this.setState(
          {
            people: persons
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
    if (Number.isFinite(idx)) {
      const dP = this.state.people[idx];
      if (dP)
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

    let persons = null;
    let assignedClasses = [];
    let buttonClasses = [classes.Button];

    if (this.state.showPeople) {
      persons = (
        <div className={classes.PeopleDiv}>
          {this.state.people.map((p, idx) => {
            return (
              <ErrorBoundary key={p.personId}>
                <Person
                  click={() => this.deletePerson(idx)}
                  changed={(event) => this.switchNameHandler(event, p.personId)}
                  personId={p.personId}
                  name={p.name}
                  age={p.age}
                  clicked={p.clicked}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      buttonClasses.push(classes.Red);
    }

    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.Lightcoral);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, this is Ingos first React App</h1>
        <p className={assignedClasses.join(' ')}>It's running</p>
        <button
          className={buttonClasses.join(' ')}
          onClick={() => this.togglePeopleHandler()}>
          Toggle 'ShowPeople'
        </button>
        {persons}
      </div>
    );
  }
}

export default App;






