import React, {Component} from 'react';
import Expenses from './components/Expenses/Expenses';

class App extends Component {

  state = {
    expenses: [
      { id: 'e1', title: 'Car Insurance', amount: 294.76, date: new Date(2021, 2, 28)},
      { id: 'e2', title: 'Rent', amount: 564.5, date: new Date(2021, 3, 1)},
      { id: 'e3', title: 'Food', amount: 54.35, date: new Date(2021, 1, 20)},
      { id: 'e4', title: 'Toilet Paper', amount: 6.99, date: new Date(2021, 2, 25)}
    ]
  };

  render(){
  return (
    <div>
      <Expenses items={this.state.expenses} />
    </div>
  )};
}

export default App;
