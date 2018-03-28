import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


class Container extends Component {
    state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  // handleSubmit = e => {
    
  // }
    render() {
      const position = [this.state.lat, this.state.lng]
      return (
        <Map className="Map--sizing" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      )
    }
  }

  export default Container;


