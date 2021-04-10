import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    banner: 'Hello World!',
  };

  bannerIsValid = () => {
    return this.state.banner.length >= 5;
  }

  bannerTextChanged = (event) => {
    const value = event.target.value;
    this.setState(
      {
        banner: value
      } 
    );
  };

  deleteCharacter = (idx) => {
    if(Number.isFinite(idx)) {
      console.log("deleteCharacter(" + idx + ") triggered!");
      let arr = [...this.state.banner.split('')];
      arr.splice(idx, 1);
      this.setState( 
        {
          banner: arr.join('')
        }
      )
    }
  };

  render() {
    let output = '';
    if(this.bannerIsValid()) {
      output = this.state.banner.split('').map((x, idx) => {
        return (
        <Char 
          click={() =>this.deleteCharacter(idx)}
          character={x} 
          idx={idx}
          key={idx}
          />
        );
      });
    }

    return (
      <div className="App">
        <div className="header">
          <input className="input"
            type="text"
            value={this.state.banner}
            onChange={this.bannerTextChanged}
          />
        </div>
        <Validation
          isValid={this.bannerIsValid()}
        />
        <div className='output'>
          {output}
        </div>
      </div>
    );
  }
}

export default App;
