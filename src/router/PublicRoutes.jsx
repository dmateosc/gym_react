import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

export const PublicRoutes = ({ isAuth, component: Component, ...rest }) => {
  console.log("Public routes "+isAuth)
    return (
      <div>
        <Route {...rest} component={(props) => (
  
          (!isAuth) ? (<Component {...props}/>) : (<Redirect to="/" />)
  
        )}></Route>
      </div>
    );
}

PublicRoutes.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,

}