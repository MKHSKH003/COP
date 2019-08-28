import './map.css'

import React, {Component} from 'react'

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    const { organization, setOrganization } = this.props

    return (
      <Map 
        google={this.props.google} 
        zoom={5} 
        initialCenter={{ lat: -29.1196343, lng: 26.0827956}}
    >
        <Marker 
            onClick={ place => setOrganization({
                ...organization,
                location:'Durban'
            })}
            title={'Durban'}
            position={{lat: -29.8482119, lng: 30.9222509}}  
        />
        <Marker 
            onClick={ place => setOrganization({
                ...organization,
                location:'Bloemfontien'
            })}
            title={'Bloemfontien'}
        />
        <Marker
            onClick={ place => setOrganization({
                ...organization,
                location:'Capetown'
            })}
            title={'Capetown'}
            position={{lat: -33.9146494, lng: 18.3751899}} 
        />
        <Marker
            onClick={ place => setOrganization({
                ...organization,
                location:'Johannesburg'
            })}
            title={'Johannesburg'}
            position={{lat: -26.1713504, lng: 27.9698129}} 
        />

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBURgGZ-uZWId-6qeleDUIDNylozQaAY0w'
})(MapContainer)