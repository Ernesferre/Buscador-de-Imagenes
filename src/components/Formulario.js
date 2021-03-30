import { useState} from 'react';

const Formulario = () => {


const [ termino, guardarTermino ] = useState('');


const buscarImagenes = e => {
    e.preventDefault();

    // Validacion por campo vacio
    if (termino.trim() === '') {
        
    }

    // Enviar el termino de busqueda hacia el componente principal




}

    return ( 
        <form
            onSubmit={buscarImagenes}

        >
            
            

            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Escribir una tematica relacionada a la imagen que deseas buscar"
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-success btn-block"
                        value="Buscar"
                    />
                </div>

            </div>
        </form>

     );
}
 
export default Formulario;