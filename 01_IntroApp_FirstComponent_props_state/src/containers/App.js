import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import People from '../components/People/People';
import classes from './App.css';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {

  // component creation lifecycle step 1
  constructor(props) {
    // always call super first to initialize parent component
    super(props);
    // DO: set up State
    // DON'T: Cause Side-Effects
    console.log('[ App.js    | Component-C1-__   ] constructor');
    console.log(props);

    this.state = {
      people: [
        { personId: '1', name: 'Mark', age: 28 },
        { personId: '2', name: 'Maik', age: 27 },
        { personId: '3', name: 'Monk', age: 25 }
      ],
      otherData: 'otherData',
      showPeople: false,
      showCockpit: true
    };
  }

  // component creation lifecycle step 2
  // component update   lifecycle step 1
  static getDerivedStateFromProps(props, state) {
    // NOTE: is very rarely necessary
    // DO: Sync State to Props
    // DON'T: Cause Side-Effects
    console.log('[ App.js    | Component-C2-U1 ] getDerivedStateFromProps');
    return state;
  }

  setPeopleState = (people) => {
    console.log('update PeopleState triggered');
    this.setState(
      {
        people: people
      }
    );
  }

  togglePeopleHandler = () => {
    console.log('toggle PeopleView triggered');
    this.setState(
      {
        showPeople: !this.state.showPeople
      });
  };

  updatePersonHandler = (event, id) => {
    console.log('update Person (' + id + ', ' + event.target.value + ') triggered');
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
    console.log('delete Person (' + idx + ') triggered');
    const records = [...this.state.people];
    if (Number.isFinite(idx)) {
      records.splice(idx, 1);
      this.setPeopleState(records);
    }
  }


  // component update   lifecycle step 2
  shouldComponentUpdate(nextProps, nextState) {
    // NOTE: here you may cancel updating process so
    // DO: Decide whether to Continue or Not
    // DON'T: Cause Side-Effects
    console.log('[ App.js    | Component-__-U2 ] shouldComponentUpdate');
    return true || false;
  }


  // component creation lifecycle step 3
  // component update   lifecycle step 3
  render() {
    // Prepare & Structure your JSX Code
    // causes rendering of child components
    console.log('[ App.js    | Component-C3-U3 ] render');

    let peopleElement = '';
    if (this.state.showPeople) {
      peopleElement = (
        <People
          records={this.state.people}
          deletePerson={this.deletePersonHandler}
          updatePerson={this.updatePersonHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}
        >&nbsp;</button>
        {this.state.showCockpit ? <Cockpit
          appTitle={this.props.appTitle}
          showPeople={this.state.showPeople}
          togglePeopleView={this.togglePeopleHandler}
        /> : null}
        <div className={classes.People}>
          {peopleElement}
        </div>
      </Aux>
    );
  }


  // component creation lifecycle step 4
  componentDidMount() {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ App.js    | Component-C4-__ ] componentDidMount');
  }


  // component update   lifecycle step 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DO: Last-minute DOM ops
    // DON'T: Cause Side-Effects
    console.log('[ App.js    | Component-__-U4 ] shouldComponentUpdate');
    return null;
  }

  // component update   lifecycle step 5
  componentDidUpdate(prevProps, prevState, snapshot) {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ App.js    | Component-__-U5 ] componentDidUpdate');
  }

}

export default withClass(App, classes.App);






