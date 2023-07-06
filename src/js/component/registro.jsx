import React from "react";

function Registro(){
    return (
        <div className="container border p-2">
            <form>
                
                <div className="mb-3 row">
                    <div className="col-3">
                    <   label className="form-label fw-bold float-end">Nombre:</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <div className="col-3">
                    <   label className="form-label fw-bold float-end">Apellido:</label>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-3">
                    <   label className="form-label fw-bold float-end">Edad:</label>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                </div>

                <div className="mb-3 row">
                    <div className="col-3">
                    <   label className="form-label fw-bold float-end">Genero:</label>
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Default select example">
                            <option defaultValue>Masculino</option>
                            <option value="1">Femenino</option>
                        </select>
                    </div>
                </div>
                
            </form>
            <button className="btn btn-primary">Submit</button>
        </div>
    );
}

export default Registro;