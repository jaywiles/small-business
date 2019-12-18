import React, { Component } from 'react';
import Nav from './containers/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import cookie from 'cookie'

function App() {
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       // username: '',
//       // password: '',
//     }
//   }

//   toggleSignIn = () => {
// 		this.setState({ loggedIn: !this.state.loggedIn })
//   }

  // render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        {console.log(document.cookie)}
          <Nav
            // loggedIn={this.state.loggedIn}
            // signOut={this.toggleSignIn} 
            />
          <Router
            // loggedIn={this.state.loggedIn}
            // signIn={this.toggleSignIn} 
            />
        </BrowserRouter>
      </Provider>
    );
  // }
}

export default App;