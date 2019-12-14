import React, { Component } from 'react'
import { Redirect } from 'react-router'
import {
  AppBar,
  Typography,
  TextField,
  Button,
  Container
} from '@material-ui/core'

const Login = (props) => (
  <div className="signin-container">
    {/* {console.log(props.loggedIn)} */}
		<AppBar position="static">
			<Typography>Sign In</Typography>
		</AppBar>
		<form className="signin-form">
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
			/>
			<Button
				//type="submit"
				fullWidth
				variant="contained"
				color="primary"
				onClick={() => { props.login() }}
			>Sign In</Button>
		</form>
	</div>
)

// class Login extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleTextChange = (e) => {
//     const state = { ...this.state }
//     state[e.target.name] = e.target.value
//     this.setState(state)
//   }

//   // login = (e) => {
//   //   e.preventDefault()
//   //   document.cookie = "loggedIn=true"
//   //   window.location.replace("/")
//   // }

//   login = (props) => {
//     console.log(props.loggedIn)
//     props.loggedIn = !props.loggedIn
//   }

//   render() {
//     return (
//       <div className="Login">
//         <Container maxWidth="sm">
//           <form className="login-form" onSubmit={this.login}>
//             <TextField
//               required
//               onChange={this.handleTextChange}
//               value={this.state.username}
//               name="username"
//               label="Username"
//               type="text" />
//             <TextField
//               required
//               onChange={this.handleTextChange}
//               value={this.state.password}
//               name="password"
//               label="Password"
//               type="password" />
//             <Button
//               type="submit"
//               className="login-button"
//               variant="contained"
//               color="primary"
//               onClick={() => {this.login()}}
//               >Login</Button>
//           </form>
//         </Container>
//       </div>
//     );
//   }
// }

export default Login;