import React, { Component } from 'react';
// does this need to be component or container?????
import Nav from './components/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'

// export const toggleSignIn = () => {
//   this.setState({ loggedIn: !this.state.loggedIn })
// }

// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      username: '',
      password: '',
    }
  }

  toggleSignIn = () => {
		this.setState({ loggedIn: !this.state.loggedIn })
  }
  
  // handleLogin = (props) => {
  //   this.passingLoggedIn(props);
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {console.log(this.state.loggedIn)}
        {/* {console.log(this.listings)} */}
          <Nav
            loggedIn={this.state.loggedIn}
            signOut={this.toggleSignIn} />
          <Router
            // listings={this.state.listings}
            loggedIn={this.state.loggedIn}
            signIn={this.toggleSignIn} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;