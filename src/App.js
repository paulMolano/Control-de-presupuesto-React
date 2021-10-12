import Pregunta from "./Components/Pregunta";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta />
        </div>
      </header>
    </div>
  );
}

export default App;
