import React, { Component } from 'react';
import Container from './Container';
import './App.css';
import { 
  getLocationByZip, 
  geoLocateMe,
  getBusinessInfo } from './services/location';


class App extends Component {
  state = {
    zip: '',
    lat: 40.7127837,
    lng: -74.00594130000002,
    zoom: 14,
    searchTerm: '',
    businesses: []
  }

  handleZipChange = e => {
    this.setState({
      zip: +e.target.value
    });
  }

  handleTermChange = e => {
    this.setState({
      searchTerm: e.target.value
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

handleTermSearch = e => {
  e.preventDefault();
  const newBusinesses = [];
  getBusinessInfo(this.state.searchTerm, this.state.lat, this.state.lng)
    .then(resp => {
      resp.data.businesses.map((business) => {
        console.log(business.name);
        console.log(business.coordinates.latitude);
        console.log(business.coordinates.longitude);
      })
    })
    .catch(err => {
      console.log(err);
    })
}


  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <div className="App--searchbar">
          <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text"
                   maxLength="5"
                   value={this.state.zip}
                   onChange={this.handleZipChange}
                   placeholder="Enter zip code"/>
            <button className="submit-btn" type="submit">Set Location</button>
          </form>
          <button onClick={this.geoLocate} className="geo-btn">Do it for me</button>
          <form onSubmit={this.handleTermSearch}>
          <input type="text"
                placeholder='Enter search term'
                value={this.state.searchTerm}
                onChange={this.handleTermChange} />
            <button className='submit-btn' type='submit'>Look it up!</button>
          </form>
        </div>
        <Container className="Container--Map" {...this.state}/>
        <ul>
          <li>Pick for me!</li>
          <li>Choices</li>
          <li>AntiChoices</li>
        </ul>
      </div>
    );
  }
}

export default App;


