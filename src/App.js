import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleApiWrapper } from 'google-maps-react' 

import MapContainer from './MapContainer'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
    
        <MapContainer google={this.props.google} />
       
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8KygqZ8hT2MQ-f_H5VBgR5Sc13L3H7zo',
})(App)