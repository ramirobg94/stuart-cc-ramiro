import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Map, Marker } from 'google-maps-react'

import PickUpMarker from '../../statics/pickUpMarker.svg'
import DropOffMarker from '../../statics/dropOffMarker.svg'

export default class MapComponent extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    const { pickUp, dropOff } = this.props

    return (
      <div ref="map" id="Map" style={style}>
        <Map
          google={this.props.google}
          initialCenter={{ lat: 48.863399, lng: 2.313305 }}
          zoom={15}
          mapTypeId="roadmap"
          disableDoubleClickZoom={true}
          mapTypeControl={false}
          scaleControl={false}
          streetViewControl={false}
          zoomControl={false}
          fullscreenControl={false}
        >
          {pickUp.error === false &&
            pickUp.address !== '' && (
            <Marker
              position={{ lat: pickUp.latitude, lng: pickUp.longitude }}
              icon={PickUpMarker}
            />
          )}
          {dropOff.error === false &&
            dropOff.address !== '' && (
            <Marker
              position={{ lat: dropOff.latitude, lng: dropOff.longitude }}
              icon={DropOffMarker}
            />
          )}
        </Map>
      </div>
    )
  }
}

MapComponent.propTypes = {
  pickUp: PropTypes.object,
  dropOff: PropTypes.object,
  google: PropTypes.any
}
