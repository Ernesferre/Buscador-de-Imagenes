import Formulario from './components/Formulario'
import { useState, useEffect } from "react"

function App() {

  //State de la App
  const [busqueda, guardarBusqueda ] = useState('');

  useEffect (() => {
    const consultarApi = async () => {
        if (busqueda === '') return;

        const imagenesPorPagina = 30;
        const key = '21014840-b15efc7b60557e87cc9cf574d'
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado.hits);
    }
    consultarApi(); 

  }, [busqueda])


  return (
    <div className="container">
      <div className="jumbotron">
        <div className="lead text-center">
          <p> Buscador de Imagenes </p>
          <Formulario
            guardarBusqueda={guardarBusqueda}
          />
        </div>
      </div>     
    </div>
  );
}

export default App;
