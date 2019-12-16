import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';
import GoogleMap from './Map'

const Listing = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(c => c.id == id)

  return (
    <Container maxWidth="sm" className="listing-container">
      {console.log("testing")}
      {/* <Paper className="listing-paper"> */}
        <h2>Name: {listing.name}</h2>
        <h4>Address: {listing.address}</h4>
        <h4>Hours: {listing.hours}</h4>
        <h4>Description: {listing.description}</h4>
        {/* {
          Object.keys(listing).map((key, index) => {
            return <Chip label={`${key}: ${listing[key]}`}></Chip>
          })
        } */}
      {/* </Paper> */}
        {/* <GoogleMap /> */}
        {/* <iframe width="600" height="450" frameborder="0"
src={`https://www.google.com/maps/embed/v1/place?q=${listing.address}&key=${process.env.REACT_APP_GOOGLE_KEY}`} allowfullscreen></iframe> */}
    </Container>
  )
}

export default Listing