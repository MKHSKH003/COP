import './map.css'

import React, { Component } from 'react'

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import appsettings from '../../../../../package.json'

export class MapContainer extends Component {
  render() {
    const { organization, setOrganization } = this.props
    
    const marker = (lat, long, label) => (
      <Marker
          onClick={place => setOrganization({
            ...organization,
            location: label
          })}
          title={label}
          position={{ lat: lat, lng: long}}
        />
    )
    
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{ lat: -33.956584, lng: 18.540828 }}
      >
        {marker(-33.925225, 18.424164, 'Capetown-CBD')}
        {marker(-33.938709, 18.469037, 'Observatory')}
        {marker(-33.921301, 18.501493, 'Maitland')}
        {marker(-33.964335, 18.475788, 'Rondebosch')}
        {marker(-33.979350, 18.448153, 'Newlands')}
        {marker(-33.986830, 18.472329, 'Claremont')}
        {marker(-33.996833, 18.478623, 'Kenilworth')}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: appsettings.MapsApiKey
})(MapContainer)