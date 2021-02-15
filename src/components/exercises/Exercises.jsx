import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTableExercise } from "./CreateTableExercise";
import moment from "moment";
import "moment/locale/es";
import { useForm } from "../../hooks/useForm";
import { startActiveTraining, startAddColumnActiveTraining } from "../../actions/exercises";

moment.locale("es");

export const Exercises = ({ nombre, id }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const initFilas = [{ }];

  const [filasTabla, setFilasTabla] = useState(initFilas);
  const [createTable, setCreateTable] = useState(false);

  useEffect(() => {

    dispatch(startAddColumnActiveTraining(id, filasTabla))
    
  }, [filasTabla]);

  const addRow = (e) => {
    e.preventDefault();
    setFilasTabla([...filasTabla, {}]);
    
    dispatch(startAddColumnActiveTraining(id, filasTabla))
  };

  const activeTraining = () => {
    setCreateTable(!createTable);
    
    dispatch(startActiveTraining(id, nombre, filasTabla))

  };

  return (
    <div>
      {nombre}

      {!createTable && <button onClick={activeTraining}>Crear Tabla</button>}
      <form action="">
        {createTable &&
          filasTabla.map((filas, index) => {
            return (
              <div>
                <CreateTableExercise
                  key={`${id}${uid}_${index}`}
                  {...filas}
                  id={id}
                  
                  index={index}
                  setFilasTabla={setFilasTabla}
                />
                <button onClick={addRow}>
                  +
                </button>
              </div>
            );
          })}
      </form>
    </div>

    /*Aqui para crear la tabla añadiremos todo lo que es el registro, con usuario, fecha e id de ejercicio */
  );
};
