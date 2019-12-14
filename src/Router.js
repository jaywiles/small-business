import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
// import Listing from './containers/Listing'
import Login from './components/Login'
import Add from './containers/Add'

const checkAuth = (props) => {
  if (props.loggedIn) {
    return true
  } else {
    return false
  }
  // const cookies = cookie.parse(document.cookie)
  // return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/" />}
      />
  )
}

const Router = (props) => {
  return (
    <Switch>
      {console.log(props.loggedIn)}
      <Route exact path="/" component={Listings}/>
      {/* how to target each individual business???? */}
      {/* <Route path="/listing/:id" component={Listing}/> */}
      <Route path="/login" component={Login}/>
      {/* NEED TO CHANGE BELOW BACK TO ProtectedRoute */}
      <Route path="/add" component={Add}/>
    </Switch>
  );
};

export default Router;