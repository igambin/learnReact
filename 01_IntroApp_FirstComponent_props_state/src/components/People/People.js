import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {

  // component creation lifecycle step 1
  constructor(props) {
    // always call super first to initialize parent component
    super(props);
    // DO: set up State
    // DON'T: Cause Side-Effects
    console.log('[ People.js | Component-C1-__ ] constructor');
    console.log(props);
  }


  // component creation lifecycle step 2
  // component update   lifecycle step 1
  static getDerivedStateFromProps(props, state) {
    // NOTE: is very rarely necessary
    // DO: Sync State to Props
    // DON'T: Cause Side-Effects
    console.log('[ People.js | Component-C2-U1 ] getDerivedStateFromProps');
    return state;
  }


  // component update   lifecycle step 2
  shouldComponentUpdate(nextProps, nextState) {
    // NOTE: here you may cancel updating process so
    // DO: Decide whether to Continue or Not
    // DON'T: Cause Side-Effects
    console.log('[ People.js | Component-__-U2 ] shouldComponentUpdate');

    if(nextProps.people !== this.props.people) {
      return true;
    } 
    
    return false;
  }


  // component creation lifecycle step 3
  // component update   lifecycle step 3
  render() {
    // Prepare & Structure your JSX Code
    // causes rendering of child components
    console.log('[ People.js | Component-C3-U3 ] render (' + this.props.name + ')');
    console.log(this.props);
    return this.props.records.map((p, idx) => (
      <Person
        deletePerson={() => this.props.deletePerson(idx)}
        updatePerson={(event) => this.props.updatePerson(event, p.personId)}
        personId={p.personId}
        name={p.name}
        age={p.age}
        key={idx}
      />
    ))
  }

  // component creation lifecycle step 4
  componentDidMount() {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ People.js | Component-C4-__ ] componentDidMount');
  }


  // component update   lifecycle step 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DO: Last-minute DOM ops
    // DON'T: Cause Side-Effects
    console.log('[ People.js | Component-__-U4 ] shouldComponentUpdate');
    return null;
  }


  // component update   lifecycle step 5
  componentDidUpdate(prevProps, prevState, snapshot) {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ People.js | Component-__-U5 ] componentDidUpdate');
  }


};

export default People;