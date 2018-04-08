import React, { Component } from "react";
import Container from "./Container";
import { Route, Link } from "react-router-dom";
import "./App.css";
import {
  getLocationByZip,
  geoLocateMe,
  getBusinessInfo
} from "./services/location";
import Choices from "./Choices";

class App extends Component {
  state = {
    zip: "",
    lat: 40.7127837,
    lng: -74.00594130000002,
    zoom: 14,
    searchTerm: "",
    businesses: []
  };

  handleZipChange = e => {
    this.setState({
      zip: +e.target.value
    });
  };

  handleTermChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    getLocationByZip(this.state.zip).then(resp => {
      this.setState({ lat: resp.lat, lng: resp.lng });
    });
  };
  geoLocate = e => {
    geoLocateMe()
      .then(resp => {
        this.setState({ lat: resp.lat, lng: resp.lng });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleTermSearch = e => {
    e.preventDefault();
    getBusinessInfo(this.state.searchTerm, this.state.lat, this.state.lng)
      .then(resp => {
        const newBusinesses = resp.data.businesses.map((business, index) => ({
          name: business.name,
          lat: business.coordinates.latitude,
          lng: business.coordinates.longitude,
          id: business.id,
          isLiked: null,
          index: index + this.state.businesses.length
        }));
        this.setState({
          businesses: [...this.state.businesses, ...newBusinesses]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLike = (isLiked, index) => {
    console.log(index);
    const likedPlace = this.state.businesses[index];
    const first = this.state.businesses.slice(0, index);
    const last = this.state.businesses.slice(index + 1);
    const newBusiness = [
      ...first,
      { ...likedPlace, isLiked: isLiked },
      ...last
    ];
    this.setState({ businesses: newBusiness });
    console.log(likedPlace);
  };

  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <div className="App--searchbar">
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              maxLength="5"
              value={this.state.zip}
              onChange={this.handleZipChange}
              placeholder="Enter zip code"
            />
            <button className="submit-btn" type="submit">
              Set Location
            </button>
          </form>
          <button onClick={this.geoLocate} className="geo-btn">
            Do it for me
          </button>
          <form onSubmit={this.handleTermSearch}>
            <input
              type="text"
              placeholder="Enter search term"
              value={this.state.searchTerm}
              onChange={this.handleTermChange}
            />
            <button className="submit-btn" type="submit">
              Look it up!
            </button>
          </form>
        </div>
        <Route
          exact
          path="/"
          render={routerProps => (
            <Container
              className="Container--Map"
              {...this.state}
              handleLike={this.handleLike}
              {...routerProps}
            />
          )}
        />
        <Route
          exact
          path="/liked-places"
          render={routerProps => <Choices {...this.state} {...routerProps} />}
        />
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>Pick for me!</li>
          <li>
            <Link to="/liked-places">Choices</Link>
          </li>
          <li>AntiChoices</li>
        </ul>
      </div>
    );
  }
}

export default App;
