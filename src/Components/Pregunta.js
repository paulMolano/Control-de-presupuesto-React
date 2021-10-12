import React, { useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //definir state
  const [cantidad, guardarCantidad] = useState();
  const [error, guardarError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  //Submit para definir presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    } else {
      guardarError(false);
      guardarPresupuesto(cantidad);
      guardarRestante(cantidad);
      actualizarPregunta(false);
    }
    guardarCantidad(0);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
          value={cantidad}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

export default Pregunta;
