import React from "react";
import { Link } from "react-router-dom/dist";

function Home(){
    return (
        <div className="container">
            
            <div className="col">
                <h1>
                    Welcome to my SPA
                </h1>
            </div>
            
            <div className="row">
                <div className="row">
                    <div className="col d-flex justify-content-around">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Armadillo_Mexicano_-_Patricia_Ventura_Parra.jpg"
                            className="img-thumbnail rounded-circle small-img"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Aphrissa_neleis_%28female%29.jpg"
                            className="img-thumbnail rounded-circle small-img"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Arteria_saludable_-_Mora_Manuela_Vieytes.jpg"
                            className="img-thumbnail rounded-circle small-img"
                        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col m-2">
                    <button type="button" class="btn btn-light">
                        <Link to="/login">Iniciar Sesion</Link>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;