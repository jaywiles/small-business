import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
// import cookie from 'cookie'
import Listings from './containers/Listings'
// import Listing from './containers/Listing'
import Login from './components/Login'
import Add from './containers/Add'
import user from './redux/reducers'

const Router = (props) => {
  const checkAuth = () => {
    console.log(props.loggedIn)
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
            : <Redirect to="/login" />}
        />
    )
  }
  
  return (
    <Switch>
      {console.log(props.signIn)}
      <Route exact path="/" component={Listings}/>
      {/* how to target each individual business???? */}
      {/* <Route path="/listing/:id" component={Listing}/> */}
      <Route signIn={props.signIn} path="/login" component={Login}/>
      {/* NEED TO CHANGE BELOW BACK TO ProtectedRoute */}
      <ProtectedRoute path="/add" component={Add}/>
    </Switch>
  );
};

export default Router;