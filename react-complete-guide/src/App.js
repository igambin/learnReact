import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is Ingos first React App</h1>
        <Person name="Mark" age="28"></Person>
        <Person name="Mike" age="27">Hobbies<ul><li>Racing</li><li>Chess</li></ul></Person>
        <Person name="Monk" age="25"></Person>
      </div>
    );
    // the jsx above will be compiled to the following line
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is Ingos first React App'));
  }
}

export default App;
