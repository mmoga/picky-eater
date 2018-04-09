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
import AntiChoices from "./AntiChoices";

class App extends Component {
  state = {
    zip: "",
    lat: 40.7127837,
    lng: -74.00594130000002,
    zoom: 14,
    searchTerm: "",
    businesses: [],
    marked: []
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
          index: index
        })).map(business => {
          const foundIndex = this.state.marked.findIndex(m => m.id === business.id);
          return {
            ...business,
            ...this.state.marked[foundIndex],
          }
        })

        this.setState({
          businesses: [...newBusinesses]
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
      {...likedPlace, isLiked:isLiked},
      ...last
    ];
    const newMarked = [
      ...this.state.marked,
      {...likedPlace, isLiked:isLiked}
    ]
    this.setState({ businesses: newBusiness , marked: newMarked});
    console.log(likedPlace);
  };

  handlePicker = e => {
    // console.log('Launch popup!');

    // Right now, this will only display 'works' if the place drawn
    // is liked. Not ideal as we need to run through only the
    // liked places so it won't draw blanks
    // maybe use a while loop
    // const rand = this.state.businesses[
    //   Math.floor(Math.random() * this.state.businesses.length)
    // ];
    // const randLiked = '';
    // while (!rand.isLiked) {
    //   randLiked = rand.
    //   console.log("works");
    // }
  };

  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
      <div>
        <Route
          exact
          path="/"
          render={routerProps => (
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
            Use My Location
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
            <Container
              className="Container--Map"
              {...this.state}
              handleLike={this.handleLike}
              {...routerProps}
            />
            </div>
          )}
        />
        <Route
          exact
          path="/liked-places"
          render={routerProps => <Choices {...this.state} {...routerProps} />}
        />
        <Route
          exact
          path="/disliked-places"
          render={routerProps => (
            <AntiChoices {...this.state} {...routerProps} />
          )}
        />
        <div className="App--navbar-container">
          <ul className="App--navbar">
            <li>
              <Link to="/">Map</Link>
            </li>
            <li className="App--pick-btn">
              <button onClick={this.handlePicker}>Pick for me!</button>
            </li>
            <li>
              <Link to="/liked-places">Choices</Link>
            </li>
            <li>
              <Link to="/disliked-places">AntiChoices</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
