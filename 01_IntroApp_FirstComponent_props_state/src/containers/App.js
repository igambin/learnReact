import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import People from '../components/People/People';
import classes from './App.css';

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

  setPeopleState = (people) => {
    this.setState(
      {
        people: people
      }
    );
  }

  togglePeopleHandler = () => {
    this.setState(
      {
        showPeople: !this.state.showPeople
      });
  };

  switchNameHandler = (event, id) => {
    const records = [...this.state.people];
    if (id) {
      const idx = records.findIndex(p => p.personId === id);
      if (idx >= 0) {
        const person = { ...records[idx] };
        person.name = event.target.value;
        records[idx] = person;
        this.setPeopleState(records);
      }
    }
  };

  deletePersonHandler = (idx) => {
    const records = [...this.state.people];
    if (Number.isFinite(idx)) {
      records.splice(idx, 1);
      this.setPeopleState(records);
    }
  }


  render() {

    let peopleElement = '';
    if (this.state.showPeople) {
      peopleElement = (
        <People
          records={this.state.people}
          deletePerson={this.deletePersonHandler}
          updatePerson={this.switchNameHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          showPeople={this.state.showPeople}
          togglePeopleView={this.togglePeopleHandler}
          />
        <div className={classes.People}>
          {peopleElement}
        </div>
      </div>
    );
  }
}

export default App;






