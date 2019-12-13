import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './components/Listings'
import Listing from './components/Listing'
import Login from './components/Login'
import Add from './components/Add'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
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

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Listings}/>
      {/* how to target each individual business???? */}
      <Route path="/listing/:name" component={Listing}/>
      <Route path="login" component={Login}/>
      <ProtectedRoute path="/add" component={Add}/>
    </Switch>
  );
};

export default Router;