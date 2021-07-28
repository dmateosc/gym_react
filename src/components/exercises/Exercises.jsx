import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateTableExercise } from "./CreateTableExercise";
import moment from "moment";
import "moment/locale/es";
import { useForm } from "../../hooks/useForm";
import {
  startActiveTraining,
  startAddColumnActiveTraining,
} from "../../actions/exercises";
import { fetchConToken } from "../../helpers/fetch";
import { useImage } from "../../hooks/useImage";

moment.locale("es");

export const Exercises = ({ nombre, id, imagenes }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const initFilas = [{}];

  const [filasTabla, setFilasTabla] = useState(initFilas);
  const [createTable, setCreateTable] = useState(false);
  const { image, getImage } = useImage("exercise");

  useEffect(() => {
    dispatch(startAddColumnActiveTraining(id, filasTabla));
  }, [filasTabla]);
  useEffect(() => {
    getImage(nombre);
  }, [image]);

  const addRow = (e) => {
    e.preventDefault();
    setFilasTabla([...filasTabla, {}]);

    dispatch(startAddColumnActiveTraining(id, filasTabla));
  };

  const deleteRow = (index, e) => {
    e.preventDefault();
    debugger;
    setFilasTabla(() => {
      filasTabla.splice(index, 1);
      return [...filasTabla];
    });
    if (filasTabla.length == 0) {
      setCreateTable(!createTable);
      setFilasTabla(initFilas);
    }
  };

  const activeTraining = () => {
    setCreateTable(!createTable);

    dispatch(startActiveTraining(id, nombre, filasTabla));
  };

  return (
    <div
      style={{
        flex: 1,
      }}>
      <span className="__execerise_name">{nombre}</span>
      <div
        style={{
          flex: 1,
        }}>
        <img
          src={image}
          alt=""
          style={{
            width: 50,
            height: 50,
          }}
        />
      </div>
      {!createTable && <button onClick={activeTraining}>Crear Tabla</button>}
      <form
        action=""
        style={{
          flex: 1,
        }}>
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
                <button onClick={addRow}>+</button>
                <button onClick={(event) => deleteRow(index, event)}>-</button>
              </div>
            );
          })}
      </form>
    </div>

    /*Aqui para crear la tabla añadiremos todo lo que es el registro, con usuario, fecha e id de ejercicio */
  );
};
