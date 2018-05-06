import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleApiWrapper } from 'google-maps-react' 

import MapContainer from './components/Map/Map.container'
import FormContainer from './components/Form/Form.container'
import ToasterContainer from './components/Toaster/Toaster.container';


import * as utils from './utils'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: false,
      pickUp: {
        address: '',
        latitude: 0,
        longitude: 0,
        error: false
      },
      dropOff:{
        address: '',
        latitude: 0,
        longitude: 0,
        error: false
      },
      errors: []
    }

    this.checkAddress = this.checkAddress.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  checkAddress = async (field, value) => {
    const params = { address: value };
 
     fetch("http://localhost:4000/geocode",{
         method: "POST",
         headers: {
           'Content-Type':'application/json'
         },
          body: JSON.stringify(params)
       })
       .then((response) => response.json() )
       .then((responseData) => {
         
         if(responseData.code !== undefined){
         
          this.setState((prevState) => {
            return {[field]: {
              ...prevState[field],
              error: true
            } }
          });

         }else{
          console.log(responseData)
          this.setState((prevState) => {
           
            return {[field]: {
              ...prevState[field],
              ...responseData,
              error: false,
            } }
          });
          
         }
        
       })
       .catch(e => console.log("EEEE",e))
       
   }

   handleChange = (field) => {
     this.setState( prevState => {
      return {[field]: {
        ...prevState[field],
        address: '',
        error: false,
      }}
     })
   }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className="App">
    
        <MapContainer google={this.props.google} pickUp={this.state.pickUp}
          dropOff={this.state.dropOff}/>
        <FormContainer
          handleChange={this.handleChange}
          onBlur={this.checkAddress}
          pickUp={this.state.pickUp}
          dropOff={this.state.dropOff}
        />
        <ToasterContainer/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8KygqZ8hT2MQ-f_H5VBgR5Sc13L3H7zo',
})(App)
