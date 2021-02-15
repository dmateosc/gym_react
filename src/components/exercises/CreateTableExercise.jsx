import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startAddColumnActiveTraining } from "../../actions/exercises";
import { useForm } from "../../hooks/useForm";

const initState = {peso:'',
    repeticion: '',}

export const CreateTableExercise = ({
  index,
  setFilasTabla,
  id,
}) => {
    const dispatch = useDispatch()
  const [formValue, handleInputChange] = useForm(initState);

  const { peso, repeticion } = formValue;

  //Crear elemento que con cada cambio modifique el valor de el ejercicio activo
  //le debo enviar el index, peso y repetición junto con el value

  useEffect(() => {
    setFilasTabla((filasTabla) =>
    filasTabla.map((fila, indexFila) => {
    
      if (indexFila === index) {
        return formValue;
      } else {
        return fila;
      }
    })
  );
      
  }, [peso, repeticion,dispatch])
 
  return (
    <div>
      <input
        type="text"
        name="peso"
        value={peso}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="repeticion"
        value={repeticion}
        onChange={handleInputChange}
      />
    </div>
  );
};
