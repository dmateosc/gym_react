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
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking()) //Aqui irá el dispatch del checking
    
  }, [dispatch])

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
              exact
              path="/auth/login"
              component={AuthRouter}
            />
          <PrivateRoute isAuth={!!uid} exact path="/" component={GymRoutes} />
          
          </Switch>
        </div>
      </Router>
    </div>
  );
};
