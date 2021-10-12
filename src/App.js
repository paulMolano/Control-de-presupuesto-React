import React, { useState } from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";

function App() {
  //definir state
  const [presupuesto, guardarPresupuesto] = useState("");
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //Cuando agregemosnuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGastos([...gastos, gasto]);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario agregarNuevoGasto={agregarNuevoGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
