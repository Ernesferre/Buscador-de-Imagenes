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
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarImagenes(resultado.hits);

        // Calcular el total de paginas
        const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        guardarTotalpaginas(calcularTotalPaginas);

        
    }
    consultarApi(); 

    // Mover la pantalla hacia arrriba

  }, [busqueda, paginaactual])

  // Definir pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if(nuevaPaginaActual === 0 ) return;
    guardarPaginaActual(nuevaPaginaActual);
  }

  // Definir la pagina Siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return
    guardarPaginaActual(nuevaPaginaActual);
  }


  return (
    <div className="container mt-3">
      <div className="jumbotron">
        <p className="lead text-center display-4 mb-5"> Buscador de Imagenes </p>
        
          <Formulario
            guardarBusqueda={guardarBusqueda}
          />
        
      </div>  

      <div className="row justify-content-center">
      {( paginaactual === 1) ? null : (
          <button
            type="button"
            
            className="bbtn btn-warning mr-1 text-black"
            onClick={paginaAnterior}
          >&laquo; Anterior </button>
        )}

        {( paginaactual === totalpaginas) ? null : (
          <button
            type="button"
            className="bbtn btn-success"
            onClick={paginaSiguiente}
          >Siguiente &raquo; </button>
        )}

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
