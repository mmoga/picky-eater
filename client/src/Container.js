import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


class Container extends Component {
 
    render() {
      const position = [this.props.lat, this.props.lng]
      return (
        <Map className="Map--sizing" center={position} zoom={this.props.zoom}>
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


