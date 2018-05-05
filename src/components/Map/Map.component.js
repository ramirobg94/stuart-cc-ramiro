import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Map extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = Object.assign({}, {
        center: {lat: 48.863399, lng: 2.313305},
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false
    })

      this.map = new maps.Map(node, mapConfig);

    }
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <div ref="map" id="Map" style={style}>
        loading maap...
      </div>
    )
  }
}