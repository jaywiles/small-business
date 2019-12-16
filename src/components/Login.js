import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  AppBar,
  Typography,
  TextField,
  Button,
  Container
} from '@material-ui/core'
import { login } from '../redux/actions'
import listings from '../redux/state'
import cookie from 'cookie'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleLogin = (e, {user}) => {
    // console.log("this is a test")
    e.preventDefault();
    {console.log(user.loggedIn)}
    document.cookie = "loggedIn=true";
    {console.log(document.cookie)}
    // const user = (this.state.username, this.state.password)
    login();
    // console.log(user);
    // console.log(login())
    // window.location.replace("/");
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newListing = { ...this.state }
  //   // last part of next line changed from carTotal
  //   newListing.id = this.props.listingTotal + 1
  //   // delete newListing.open
  //   console.log("LISTING: ", newListing)
  //   // last part of next line changed from addCar
  //   this.props.addListing(newListing)
  // }

  // need to split up user/pw for handling change??

  render() {
    return (
      <div className="signin-container">
        {console.log(document.cookie)}
        <AppBar position="static">
          <Typography>Sign In</Typography>
        </AppBar>
        <form onSubmit={this.handleLogin} className="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
            //required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={this.handleTextChange} 
          />
          <TextField 
            variant="outlined"
            margin="normal"
            //required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleTextChange} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // onClick={() => { login() }}
          >Sign In</Button>
        </form>
      </div>
    )
  }
}

// ####

// const Login = (props) => {
//   const handleTextChange = (e) => {
//     const newState = { ...this.state }
//     newState[e.target.id] = e.target.value
//     this.setState(newState)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const newListing = { ...this.state }
//     // last part of next line changed from carTotal
//     newListing.id = this.props.listingTotal + 1
//     // delete newListing.open
//     console.log("LISTING: ", newListing)
//     // last part of next line changed from addCar
//     this.props.addListing(newListing)
//   }

//   // need to split up user/pw for handling change??

//   return (
//     <div className="signin-container">
//       {/* {console.log(props.loggedIn)} */}
//       <AppBar position="static">
//         <Typography>Sign In</Typography>
//       </AppBar>
//       <form onSubmit={handleSubmit} className="signin-form">
//         <TextField
//           variant="outlined"
//           margin="normal"
//           //required
//           fullWidth
//           id="username"
//           label="Username"
//           name="username"
//           autoComplete="username"
//           autoFocus
//           onChange={handleTextChange} 
//         />
//         <TextField 
//           variant="outlined"
//           margin="normal"
//           //required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//           onChange={handleTextChange} 
//         />
//         <Button
//           //type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           onClick={() => { props.login() }}
//         >Sign In</Button>
//       </form>
//     </div>
//   )
// }

// ####

export default Login;