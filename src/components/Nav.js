import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'

const Nav = (props) => {
  const navStyle = {
    color: 'white'
  }

  return (
    <AppBar position="relative">
      <Toolbar>
      <Typography variant="h6" style={{ flexGrow: "1" }}>
        Austin Small Business
      </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/listings" style={navStyle}>Listings</Link>
          </li>
          {props.loggedIn ? (
            <div>
              <li className="nav-list-item">
                <Link to="/add" style={navStyle}>Add</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/" style={navStyle}>LOGOUT</Link>
              </li>
            </div>
            ):(
            <div>
              <li className="nav-list-item">
                <Link to="/login" style={navStyle}>Login</Link>
              </li>
            </div>
            )
          }
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;