import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core';

const Listing = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(c => c.id == id)

  return (
    <Container maxWidth="sm" className="listing-container">
      <Paper className="listing-paper">
        <h2>{listing.name}</h2>
        {
          Object.keys(listing).map((key, index) => {
            return <Chip label={`${key}: ${listing[key]}`}></Chip>
          })
        }
      </Paper>
    </Container>
  )
}

export default Listing