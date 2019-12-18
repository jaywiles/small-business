import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import '../App.css'
import { logout } from '../redux/actions'
import cookie from 'cookie'

const Nav = (props) => {
  const navStyle = {
    color: 'white',
  }

  const handleLogout = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000"
    window.location.replace("/")
  }

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
          {document.cookie == "loggedIn=true" ? (
            <>
              <li className="nav-list-item">
                <Link to="/add" style={navStyle}>Add</Link>
              </li>
              <li className="nav-list-item"
                onClick={handleLogout}>
                <Link to="/" style={navStyle}>Logout</Link>
              </li>
            </>
          ):(
            <li className="nav-list-item">
              <Link to="/login" style={navStyle}>Login</Link>
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  )
}

export default Nav;