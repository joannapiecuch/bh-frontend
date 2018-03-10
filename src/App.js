import React, { Component } from 'react';
import './App.css';
import MemberSignup from './containers/MemberSignup';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="title">Signup on our event</h2>
        <MemberSignup/>
      </div>
    );
  }
}

export default App;
