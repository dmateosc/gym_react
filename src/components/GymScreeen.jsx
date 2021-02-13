import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {} from "react-router-dom";
import { ExerciseScreen } from "./exercises/ExerciseScreen";
export const GymScreeen = () => {
  return (
    <div>
        <h1>Centro Wellness Sierra de Gata</h1>
        <Switch>
        <Route exact path="/exercises/:muscle" component={ExerciseScreen}></Route>
        </Switch>
    </div>
  );
};
