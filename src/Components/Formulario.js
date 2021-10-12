import React, { useState } from "react";
import Error from "./Error";

const Formulario = () => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState("");
  const [error, guardarError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre de Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 500"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
