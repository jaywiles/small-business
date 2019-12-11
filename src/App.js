import React from 'react';
// does this need to be component or container?????
import Nav from './components/Nav'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;