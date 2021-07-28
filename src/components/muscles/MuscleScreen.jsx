import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGetMuscles } from "../../actions/muscle";
import ImageMuscle from './ImageMuscle'
export const MuscleScreen = () => {
  const dispatch = useDispatch();
  const { muscles } = useSelector((state) => state.muscle);

  useEffect(() => {
    dispatch(startGetMuscles());
  }, [dispatch]);

  return (
    <div>
      Pagina musculos
      {muscles &&
        muscles.map((muscle) => {
            
          return (
            <div style={{
                flex: 1
            }}>
              <ImageMuscle nombre={muscle.nombre}></ImageMuscle>
              <Link style={{
                  textDecoration: true,
                  textDecorationLine: "none"
              }} to={`/exercises/${muscle.nombre}`}>{muscle.nombre}</Link>
            </div>
          );
        })}
    </div>
  );
};
