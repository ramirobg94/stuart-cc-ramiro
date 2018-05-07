import React, { Component } from "react";
import "./App.css";

import { GoogleApiWrapper } from "google-maps-react";

import MapContainer from "./components/Map/Map.container";
import FormContainer from "./components/Form/Form.container";
import ToasterContainer from "./components/Toaster/Toaster.container";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("a", this.props);
    return (
      <div className="App">
        <MapContainer google={this.props.google} />
        <FormContainer />
        <ToasterContainer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC8KygqZ8hT2MQ-f_H5VBgR5Sc13L3H7zo"
})(App);
