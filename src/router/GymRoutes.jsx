import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ExerciseScreen } from "../components/exercises/ExerciseScreen";
import { GymScreeen } from "../components/GymScreeen";
import { TrainingDayScreen } from "../components/training/TrainingDayScreen";
import { TrainingScreen } from "../components/training/TrainingScreen";
import { Navbar } from "../components/ui/Navbar";

export const GymRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={GymScreeen}></Route>
        
        <Route exact path="/trainings/:fecha" component={TrainingDayScreen} />
        <Route exact path="/training" component={TrainingScreen} />

        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
};
