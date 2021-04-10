import React from 'react';
import Person from './Person/Person';

const People = (props) => (
  props.records.map((p, idx) => (
    <Person
      deletePerson={() => props.deletePerson(idx)}
      updatePerson={(event) => props.updatePerson(event, p.personId)}
      personId={p.personId}
      name={p.name}
      age={p.age}
      key={idx}
    />
  ))
);

export default People;