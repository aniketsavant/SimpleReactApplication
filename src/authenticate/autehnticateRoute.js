import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function AutehnticateRoute ({component: Component, path, ...rest}) {
  const isLoggedIn = localStorage.getItem('isLogIn');
  // const isLoggedIn = useSelector(state => state.isLoggedIn);

  // console.log('rest===>', rest);
  if (path === '/login') {
    return (
      <Route {...rest} path = {path} render = {(props) => {
        return !isLoggedIn ? <Component  {...props} /> : <Redirect to = '/home' />
      }} />
    );
  } else if (path !== '/login') {
    return (
      <Route {...rest} path = {path} render = {(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to = '/login' />
      }} />
    );
  }
}

export default AutehnticateRoute;