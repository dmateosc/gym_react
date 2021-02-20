import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { ExerciseScreen } from "./exercises/ExerciseScreen";
import { MuscleScreen } from "./muscles/MuscleScreen";
export const GymScreen = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    /*guardamos el usuario*/
  }, [dispatch])

  return (
    <div>
        <h1>Centro Wellness Sierra de Gata</h1>
        <MuscleScreen></MuscleScreen>
    </div>
  );
};
