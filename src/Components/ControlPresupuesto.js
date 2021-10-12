import React from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "./helpers";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  //Cambiar color según dinero restante
  const clase = revisarPresupuesto(presupuesto, restante);

  return (
    <>
      <div className="alert alert-primary">Presupuesto: $ {presupuesto}</div>
      <div className={clase}>Restante: $ {restante}</div>
    </>
  );
};
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
