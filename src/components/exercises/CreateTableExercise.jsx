import React, { useState } from "react";

export const CreateTableExercise = ({
  pesoId,
  repeticionId,
  index,
  setFilasTabla,
}) => {
  const [formValue, setFormValue] = useState({
    peso: "",
    repeticion: "",
  });

  const { peso, repeticion } = formValue;

  //Crear elemento que con cada cambio modifique el valor de el ejercicio activo
  //le debo enviar el index, peso y repetición junto con el value
  const handleInputChangePeso = (e) => {
    setFormValue({
      ...formValue,
      peso: e.target.value,
    });
    setFilasTabla((filasTabla) =>
      filasTabla.map((fila, indexFila) => {
        if (indexFila === index) {
          return formValue;
        } else {
          return fila;
        }
      })
    );
  };

  const handleInputChangeRepeticion = (e) => {
    setFormValue({
      ...formValue,
      repeticion: e.target.value,
    });
    setFilasTabla((filasTabla) =>
      filasTabla.map((fila, indexFila) => {
        if (indexFila === index) {
          return formValue;
        } else {
          return fila;
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        name={pesoId}
        value={peso}
        onChange={handleInputChangePeso}
      />
      <input
        type="text"
        name={repeticionId}
        value={repeticion}
        onChange={handleInputChangeRepeticion}
      />
    </div>
  );
};
