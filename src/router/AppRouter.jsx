import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";

import { AuthRouter } from "./AuthRouter";

import { GymRoutes } from "./GymRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const {checking, uid} = useSelector(state => state.auth)

  useEffect(() => {
      dispatch(startChecking())
    
  }, [dispatch])
//Importante, para que no vuelva a recargar sobre auth/login dejar el checking para que retorne un esperar mientras carga la pantalla con el uid que obtiene en 
//checking

console.log("Por aqui paso X veces " + checking + " el uid es " + uid)
if (checking) {
  return <h1>Espera...</h1>;
}
  return (
    <div>
      {/*
                    exact /login
                    exact /  - Gym
                
                */}

      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <PublicRoutes
              isAuth={!!uid}
              path="/auth"
              component={AuthRouter}
            />
            <PrivateRoute isAuth={!!uid} path="/" component={GymRoutes} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
