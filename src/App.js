import React, { Component } from 'react'
import './App.css'

import { GoogleApiWrapper } from 'google-maps-react'

import MapContainer from './components/Map/Map.container'
import FormContainer from './components/Form/Form.container'
import ToasterContainer from './components/Toaster/Toaster.container'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      pickUp: {
        address: '',
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      },
      dropOff: {
        address: '',
        latitude: 0,
        longitude: 0,
        error: false,
        valid: false
      },
      toaster: false
    }

    this.checkAddress = this.checkAddress.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.postJob = this.postJob.bind(this)
  }

  checkAddress = async (field, value) => {
    const params = { address: value }

    fetch('http://localhost:4000/geocode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.code !== undefined) {
          this.setState(prevState => {
            return {
              [field]: {
                ...prevState[field],
                error: true,
                valid: false
              }
            }
          })
        } else {
          this.setState(prevState => {
            return {
              [field]: {
                ...prevState[field],
                ...responseData,
                error: false,
                valid: true
              }
            }
          })
        }
      })
      .catch( () =>
        this.setState(prevState => {
          return {
            [field]: {
              ...prevState[field],
              error: true,
              valid: false
            }
          }
        })
      )
  };

  postJob = async () => {
    const params = {
      pickup: this.state.pickUp.address,
      dropoff: this.state.dropOff.address
    }
    this.setState({ loading: true })
    fetch('http://localhost:4000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseData => {
        if (responseData.code !== undefined) {
          setTimeout(() => this.setState({ loading: false }), 500)
        } else {
          const initAddress = {
            address: '',
            latitude: 0,
            longitude: 0,
            error: false,
            valid: false
          }
          setTimeout(
            () =>
              this.setState({
                pickUp: initAddress,
                dropOff: initAddress,
                toaster: true,
                loading: false
              }),
            500
          )
        }
      })
      .catch(() => {
        setTimeout(() => this.setState({ loading: false }), 500)
      })
  };

  handleChange = (field, value) => {
    this.setState(prevState => {
      return {
        [field]: {
          ...prevState[field],
          address: value,
          valid: false,
          error: false
        }
      }
    })
  };

  render() {
    return (
      <div className="App">
        <MapContainer
          google={this.props.google}
          pickUp={this.state.pickUp}
          dropOff={this.state.dropOff}
        />
        <FormContainer
          handleChange={this.handleChange}
          onBlur={this.checkAddress}
          pickUp={this.state.pickUp}
          dropOff={this.state.dropOff}
          postJob={this.postJob}
          loading={this.state.loading}
        />
        {this.state.toaster && (
          <ToasterContainer
            closeToaster={() => this.setState({ toaster: false })}
          />
        )}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC8KygqZ8hT2MQ-f_H5VBgR5Sc13L3H7zo'
})(App)
