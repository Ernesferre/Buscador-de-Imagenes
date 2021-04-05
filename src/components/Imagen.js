const Imagen = ({imagen}) => {
    
    // extraer las variables - Destructuring

    const { largeImageURL, likes , previewURL , tags , view } = imagen;

    
    
    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{view} Vistas</p>
                </div>

                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferred"
                        className="btn btn-primary btn-block"
                    >Card Footer</a>

                </div>


            </div>

        </div>
      );
}
 
export default Imagen;