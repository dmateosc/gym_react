import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
    
  
  console.log("El componente es "+ isAuth)
  return (
    <div>
      <Route  {...rest} // Contiene el exact path 
        component={(props) => //Aqui le añade el valor del component y las propiedades que arrastraba
          isAuth ? <Component {...props} /> : <Redirect to="/auth/login" /> //Si no está autenticado no va al component
        }></Route>
    </div>
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
