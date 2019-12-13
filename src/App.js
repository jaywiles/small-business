import React, { Component } from 'react';
// does this need to be component or container?????
import Nav from './components/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

console.log(document.cookie)

function App() {
// class App extends Component {
  // render() {
    return (
      <BrowserRouter>
        <Nav />
        <Router />
      </BrowserRouter>
    );
  // }
}

export default App;