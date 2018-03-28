import React, { Component } from 'react';
import Container from './Container';
import './App.css';

class App extends Component {
  state = {
    zip: ''
  }
  handleZipChange(e) {
    this.setState({
      zip: +e.target.value
    });
  }

  // handleLatChange(e) {
  //   this.setState({
  //     lat: +e.target.value
  //   });
  // }

  // handleLonChange(e) {
  //   this.setState({
  //     lon: +e.target.value
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
    // getWeatherByZip(this.state.zip)
    //   .then(response => {
    //     const dailyWeather = response.data.daily;
    //     this.setState({
    //       dailyWeather: dailyWeather
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     this.setState({
    //       error: "Something is broken"
    //     });
    //   });
  // }
  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <Container />
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text"
                 maxLength="5"
                 value={this.state.zip}
                 onChange={(e) => this.handleZipChange(e)}
                 placeholder="Enter zip code"/>
          <button className="submit-btn" type="submit">Set Location</button>
        </form>
      </div>
    );
  }
}

export default App;


