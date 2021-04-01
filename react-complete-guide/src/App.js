import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [peopleState, setPeople] = useState(
    {
      people: [
        {name: 'Mark', age: 28},
        {name: 'Maik', age: 27},
        {name: 'Monk', age: 25}
      ],
      otherData: "otherData"
   });

   console.log(peopleState);

   const rotatePeopleHandler = () => {
    let arr = [...peopleState.people.slice(1, peopleState.people.length), peopleState.people[0]];
    setPeople({
      ...peopleState,
      people: arr
    });    
  };

  return (
    <div className="App">
      <h1>Hi, this is Ingos first React App</h1>
      <button onClick={rotatePeopleHandler}>Rotate People</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age}></Person>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}></Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}></Person>
    </div>
  );
  // the jsx above will be compiled to the following line
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is Ingos first React App'));
}

export default app;


  



