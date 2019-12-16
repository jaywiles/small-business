import React, { Component } from 'react';
// does this need to be component or container?????
import Nav from './containers/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
import cookie from 'cookie'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      {console.log(document.cookie)}
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;