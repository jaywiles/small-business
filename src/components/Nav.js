import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'

const Nav = (props) => {
  const navStyle = {
    color: 'white'
  }

  if (document.cookie = "loggedIn=true") {
    return (
      <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={navStyle}>Listings</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/add" style={navStyle}>Add</Link>
            </li>
            <li className="nav-list-item"
              onClick={() => {
                document.cookie = "loggedIn=false"
                window.location.replace("/login")
              }}>
              <Link to="/" style={navStyle}>LOGOUT</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  } else if (document.cookie = "loggedIn=false") {
    return (
      <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Austin Small Business
        </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={navStyle}>Listings</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/login" style={navStyle}>Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  }
}

//   return (
//     <AppBar position="relative">
//       <Toolbar>
//       <Typography variant="h6" style={{ flexGrow: "1" }}>
//         Austin Small Business
//       </Typography>
//         <ul className="nav-list">
//           <li className="nav-list-item">
//             <Link to="/listings" style={navStyle}>Listings</Link>
//           </li>
//           {document.cookie = "loggedIn=true" ? (
//             <div>
//               <li className="nav-list-item">
//                 <Link to="/add" style={navStyle}>Add</Link>
//               </li>
//               <li className="nav-list-item">
//                 <Link to="/" style={navStyle}>LOGOUT</Link>
//               </li>
//             </div>
//             ):(
//             <div>
//               <li className="nav-list-item"
//                 onClick={() => {
//                   document.cookie = "loggedIn="
//                   window.location.replace("/login")
//                 }}>Login
//                 {/* <Link to="/login" style={navStyle}>Login</Link> */}
//               </li>
//             </div>
//             )
//           }
//         </ul>
//       </Toolbar>
//     </AppBar>
//   )
// }

export default Nav;

// const Nav = (props) => {
//   const navStyle = {
//     color: 'white'
//   }

//   return (
//     <AppBar position="relative">
//       <Toolbar>
//       <Typography variant="h6" style={{ flexGrow: "1" }}>
//         Austin Small Business
//       </Typography>
//         <ul className="nav-list">
//           <li className="nav-list-item">
//             <Link to="/listings" style={navStyle}>Listings</Link>
//           </li>
//           {document.cookie = "loggedIn=true" ? (
//             <div>
//               <li className="nav-list-item">
//                 <Link to="/add" style={navStyle}>Add</Link>
//               </li>
//               <li className="nav-list-item">
//                 <Link to="/" style={navStyle}>LOGOUT</Link>
//               </li>
//             </div>
//             ):(
//             <div>
//               <li className="nav-list-item"
//                 onClick={() => {
//                   document.cookie = "loggedIn="
//                   window.location.replace("/login")
//                 }}>Login
//                 {/* <Link to="/login" style={navStyle}>Login</Link> */}
//               </li>
//             </div>
//             )
//           }
//         </ul>
//       </Toolbar>
//     </AppBar>
//   )
// }