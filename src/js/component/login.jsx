import React from "react";
import { Link } from "react-router-dom/dist";

function Login(){
    return(
        <div className="container border p-2">
            <div className="row">
                <div className="col">
                    <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control w-50 mx-auto" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control w-50 mx-auto" id="exampleInputPassword1"/>
                    </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <button type="button" className="btn btn-light">
                        <Link to="/registro">Registrarse</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;