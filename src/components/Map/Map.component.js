import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import PickUpBlank from '../../statics/pickUpBadgeBlank.svg'

export default class MapComponent extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
      <div ref="map" id="Map" style={style}>
         <Map google={this.props.google} 
          initialCenter={{lat: 48.863399, lng: 2.313305}}
            zoom={15}
            mapTypeId='roadmap'
            disableDoubleClickZoom={ true}
            mapTypeControl={false}
            scaleControl={false}
            streetViewControl={false}
            zoomControl={false}
            fullscreenControl={false}>
 
  
  <Marker
    name={'Your position'}
    position={{lat: 48.863399, lng: 2.313305}}
    icon={PickUpBlank} />
       </Map>
      </div>

      
    )
  }
}