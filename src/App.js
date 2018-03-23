import React, { Component } from 'react';
import Container from './Container';
import './App.css';

class App extends Component {
  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <Container />
      </div>
    );
  }
}

export default App;


