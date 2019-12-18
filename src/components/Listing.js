import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>

const Listing = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(c => c.id == id)

  const defaultProps = {
    center: {
      lat: Number(listing.latitude),
      lng: Number(listing.longitude),
    },
    zoom: 13
  };

  console.log(defaultProps.center)

  return (
    <Container maxWidth="sm" className="listing-container">
      {console.log(process.env.REACT_APP_GOOGLE_KEY)}
      <h2>Name: {listing.name}</h2>
      <h4>Address: {listing.address}</h4>
      <h4>Hours: {listing.hours}</h4>
      <h4>Description: {listing.description}</h4>
      <Container style={{ height: "400px", width: "450px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          // yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent lat={listing.latitude} lng={listing.longitude} text={listing.name} />
        </GoogleMapReact>
      </Container>
    </Container>
  )
}

export default Listing