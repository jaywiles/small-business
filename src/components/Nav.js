import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'
import { logout } from '../redux/actions'
import cookie from 'cookie'

const Nav = ({user}) => {
  const navStyle = {
    color: 'white',
  }

  const handleLogout = (e) => {
    e.preventDefault();
    console.log(user.loggedIn)
    logout();
    // document.cookie = "loggedIn=false";
    console.log(document.cookie)
    console.log(logout());
    // history.push("/");
  }

  // if (document.cookie = "loggedIn=true") {
  if (user.loggedIn) {
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
              onClick={handleLogout}>
              <Link to="/" style={navStyle}>LOGOUT</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    )
  } else if (!user.loggedIn)
  // if (document.cookie = "loggedIn=false") 
    {
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
//           {console.log(document.cookie)}
//           <li className="nav-list-item">
//             <Link to="/listings" style={navStyle}>Listings</Link>
//           </li>
//           {document.cookie = "loggedIn=true" ? (
//             <>
//               <li className="nav-list-item">
//                 <Link to="/add" style={navStyle}>Add</Link>
//               </li>
//               <li className="nav-list-item">
//                 <Link to="/login" onClick={handleLogout} style={navStyle}>LOGOUT</Link>
//               </li>
//             </>
//             ):(
//             <div>
//               <li className="nav-list-item">
//                 {/* // onClick={() => { */}
//                 {/* //   document.cookie = "loggedIn=" */}
//                 {/* //   window.location.replace("/login") */}
//                 {/* // }}>Login */}
//                 <Link to="/login" style={navStyle}>Login</Link>
//               </li>
//             </div>
//             )
//           }
//         </ul>
//       </Toolbar>
//     </AppBar>
//   )
// }

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
//           {props.loggedIn = true ? (
//             <div>
//               <li className="nav-list-item">
//                 <Link to="/add" style={navStyle}>Add</Link>
//               </li>
//               <li className="nav-list-item">
//                 <Link to="/" style={navStyle}>LOGOUT</Link>
//               </li>
//             </div>
//             ):(
//             <li className="nav-list-item"
//               onClick={() => {
//                 document.cookie = "loggedIn="
//                 window.location.replace("/login")
//               }}>Login
//               {/* <Link to="/login" style={navStyle}>Login</Link> */}
//             </li>
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

