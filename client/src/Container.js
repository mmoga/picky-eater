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
                I'm a marker. <br /> Suck it.
              </span>
            </Popup>
          </Marker>
        </Map>
      )
    }
  }
Container.defaultProps = {lat: 40.7127837, lng: -74.00594130000002, zoom: 13}

  export default Container;


