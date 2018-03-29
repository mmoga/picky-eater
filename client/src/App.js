import React, { Component } from 'react';
import Container from './Container';
import './App.css';
import { getLocationByZip, geoLocateMe } from './services/location';

class App extends Component {
  state = {
    zip: '',
    lat: 0,
    lng: 0,
    zoom: 13
  }
  handleZipChange = e => {
    this.setState({
      zip: +e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    getLocationByZip(this.state.zip)
      .then(resp => {
        this.setState({lat: resp.lat, lng: resp.lng})
      })
  }
geoLocate = e => {
  geoLocateMe()
  .then(resp => {
    this.setState({lat: resp.lat, lng: resp.lng})
  })
  .catch(err => {
    console.error(err);
  })
}

  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <Container {...this.state}/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text"
                 maxLength="5"
                 value={this.state.zip}
                 onChange={this.handleZipChange}
                 placeholder="Enter zip code"/>
          <button className="submit-btn" type="submit">Set Location</button>
        </form>
        <button onClick={this.geoLocate}>Do it for me</button>
      </div>
    );
  }
}

export default App;


