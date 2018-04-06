import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';


class Container extends Component {
  
    render() {
      const markers = this.props.businesses.map((business) => 
      <Marker key={business.id} position={[business.lat, business.lng]} isLiked={business.isLiked}>
        <Popup>
          <span className="Popup--info">
            <img onClick={() => {this.props.handleLike(false, business.index)}} src="https://icon.now.sh/thumb_down/" alt="I dislike it"/>
            <h1>{business.name}</h1>
            <img onClick={() => {this.props.handleLike(true, business.index)}} src="https://icon.now.sh/thumb_up" alt="I like it"/>
          </span>
        </Popup>
      </Marker>
    )
      const position = [this.props.lat, this.props.lng]
      return (
        <Map className="Map--sizing" center={position} zoom={this.props.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers}
        </Map>
      )
    }
  }
// Container.defaultProps = {lat: 40.7127837, lng: -74.00594130000002, zoom: 13}

  export default Container;


