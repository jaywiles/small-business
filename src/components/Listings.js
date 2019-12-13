import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Listings = (props) => {
  return (
    <div>
      <h1>testing the listings page</h1>
    </div>

  )
}

// const Listings = (props) => {
//   return (
//     <div className="card-container">
//       {props.listings.map((listing, index) => (
//         <Card key={index} className="card">
//           <CardContent className="text-gray">
//             <span>{listing.name.toUpperCase()}</span>
//             <ul>
//               <li>Address: {listing["address"]}</li>
//               <li>Hours: {listing["hours"]}</li>
//               <li>Description: {listing["description"]}</li>
//             </ul>
//           </CardContent>
//           <Divider />
//           <CardActions style={{ color: 'mediumblue' }}>
//             <Link to={`/listing/${listing.id}`}>Open Listing</Link>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   )
// }

export default Listings;