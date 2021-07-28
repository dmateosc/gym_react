import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ExerciseScreen } from "../components/exercises/ExerciseScreen";
import { GymScreen } from "../components/GymScreen";
import { MuscleScreen } from "../components/muscles/MuscleScreen";
import { TrainingDayScreen } from "../components/training/TrainingDayScreen";
import { TrainingScreen } from "../components/training/TrainingScreen";
import { Navbar } from "../components/ui/Navbar";

export const GymRoutes = () => {
  console.log("Estoy en GymRoutes")
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={GymScreen}></Route>
        <Route exact path="/exercises/:muscle" component={ExerciseScreen}></Route>
        <Route exact path="/muscles" component={MuscleScreen} />
        <Route exact path="/training-day" component={TrainingDayScreen} />
        <Route exact path="/training" component={TrainingScreen} />

        <Redirect to="/muscles"></Redirect>
      </Switch>
    </div>
  );
};
