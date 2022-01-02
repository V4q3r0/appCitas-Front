import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cargarCitasAsync from '../redux/reducers/padecimientos/padecimientos_thunks';

const PadecimientosPage = () => {
    const dispatch = useDispatch();
    const { estaCargando, padecimientos, mensajeError } = useSelector((state)=> state.padecimientos);

    useEffect(() => {
        dispatch(cargarCitasAsync());
    }, []);

    return (
        <div>
            <h1>Lista de Citas</h1>
            {estaCargando && <h3>Cargando...</h3>}
            {mensajeError && <h3>{mensajeError}</h3>}
            <table class="table table-bordered"> 
            <thead>
                <tr>
                    <th scope="col">ID Paciente</th>
                    <th scope="col">Padecimiento</th>
                    <th scope="col">Tratamiento</th>
                </tr>
            </thead>
            {padecimientos && padecimientos.map((padecimientos) => 
                <tbody>
                    <tr>
                        <td>{padecimientos.idPaciente}</td>
                        <td>{padecimientos.padecimiento}</td>
                        <td>{padecimientos.tratamiento}</td>
                    </tr>
                </tbody>
            )}
            </table>
        </div>
    )
}

export default PadecimientosPage;