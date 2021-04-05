import Formulario from './components/Formulario'
import { useState, useEffect } from "react"
import ListadoImagenes from './components/ListadoImagenes'

function App() {

  //State de la App
  const [busqueda, guardarBusqueda ] = useState('');
  const [imagenes, guardarImagenes ] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalpaginas] = useState(1);


  useEffect (() => {
    const consultarApi = async () => {
        if (busqueda === '') return;

        const imagenesPorPagina = 30;
        const key = '21014840-b15efc7b60557e87cc9cf574d'
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarImagenes(resultado.hits);
        const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        guardarTotalpaginas(calcularTotalPaginas);

        // Calcular el total de paginas
    }
    consultarApi(); 

  }, [busqueda])


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Imagenes </p>
        
          <Formulario
            guardarBusqueda={guardarBusqueda}
          />
        
      </div>  
      
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
      </div>
    </div>
  );
}

export default App;
