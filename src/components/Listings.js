import React from 'react'
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const Listings = (props) => {
  return (
    <Container maxWidth="lg" className="listing-container">
      {/* <h4>Welcome, {props.user.username}</h4> */}
      {/* <div className="flex-container">
        <Chart />
        <Total />
        <AddListing listingTotal={props.listings.length} />
      </div> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(props.listings)}
        {props.listings.map((listing, index) => (
          <TableRow key={listing.id}>
            <TableCell component="th" scope="row">
              {listing.id}
            </TableCell>
            <TableCell>{listing["name"]}</TableCell>
            <TableCell>{listing["address"]}</TableCell>
            <TableCell>{listing["hours"]}</TableCell>
            <TableCell>{listing["description"]}</TableCell>
            <TableCell>
              <DeleteIcon
                onClick={() => props.deleteListing(index)}
                className="icon text-red" />
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default Listings;