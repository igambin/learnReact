import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  // component creation lifecycle step 1
  constructor(props) {
    // always call super first to initialize parent component
    super(props);
    // DO: set up State
    // DON'T: Cause Side-Effects
    console.log('[ Person.js | Component-C1-__   ] constructor');
    console.log(props);

    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  // component creation lifecycle step 2
  // component update   lifecycle step 1
  static getDerivedStateFromProps(props, state) {
    // NOTE: is very rarely necessary
    // DO: Sync State to Props
    // DON'T: Cause Side-Effects
    console.log('[ Person.js | Component-C2-U1 ] getDerivedStateFromProps');
    return state;
  }


  // component update   lifecycle step 2
  shouldComponentUpdate(nextProps, nextState) {
    // NOTE: here you may cancel updating process so
    // DO: Decide whether to Continue or Not
    // DON'T: Cause Side-Effects
    console.log('[ Person.js | Component-__-U2 ] shouldComponentUpdate');
    return true || false;
  }


  // component creation lifecycle step 3
  // component update   lifecycle step 3
  render() {
    // Prepare & Structure your JSX Code
    // causes rendering of child components
    console.log('[ Person.js | Component-C3-U3 ] render (' + this.props.name + ')');
    return (
      <Aux>
          { this.context.authenticated ? <p>Logged In!</p> : null }
        <p>
          <input
            className={classes.Input}
//            ref={(inputEl) => {this.inputElement = inputEl}}
            ref = {this.inputElementRef}
            type="text"
            name={this.props.personId}
            value={this.props.name}
            onChange={this.props.updatePerson}
          /> is {this.props.age} years old
        </p>
        <button onClick={this.props.deletePerson}>Delete</button>
      </Aux>
    );
  }


  // component creation lifecycle step 4
  componentDidMount() {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ Person.js | Component-C4-__ ] componentDidMount');
//    this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('Logged in: ' + this.context.authenticated);
  }


  // component update   lifecycle step 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DO: Last-minute DOM ops
    // DON'T: Cause Side-Effects
    console.log('[ Person.js | Component-__-U4 ] shouldComponentUpdate');
    return null;
  }


  // component update   lifecycle step 5
  componentDidUpdate(prevProps, prevState, snapshot) {
    // DO: Cause Side-Effects
    // DON'T: Update State (triggers re-render)
    // NOTE: updating state is only allowed on promise callbacks
    console.log('[ Person.js | Component-__-U5 ] componentDidUpdate');
  }

};

// consider using propTypes when other people are going to use your components
Person.propTypes = {
  deletePerson: PropTypes.func,
  updatePerson: PropTypes.func,
  name: PropTypes.string,
  personId: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, classes.Person);