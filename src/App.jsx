import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/informacion";
import Contador from "./components/contador";

function App() {
  // Aquí agrego la lógica de un componente
  // const anio = 2024; -- ejemplo de props con variables
  return (
    <>
      <section className="container my-5">
        <h1 className="text-center">Practica Inicial de React</h1>
        {/* Aquí voy a agregar un componente */}
        <Informacion comision='c102i' anioActual={2024}/>
      </section>
      <Contador></Contador>
    </>
  );
}

export default App;
