import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cargarCitasAsync from '../redux/reducers/citas/citas_thunks';

const CitasPages = () => {
    const dispatch = useDispatch();
    const { estaCargando, citas, mensajeError } = useSelector((state)=> state.citas);

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
                    <th scope="col">ID usuario</th>
                    <th scope="col">Usuario</th>
                    <th scope="col">Medico</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            {citas && citas.map((cita) => 
                <tbody>
                    <tr>
                        <td>{cita.idPaciente}</td>
                        <td>{cita.nombrePaciente+' '+cita.apellidosPaciente}</td>
                        <td>{cita.nombreMedico+' '+cita.apellidosMedico}</td>
                        <td>{cita.fechaReservaCita}</td>
                        <td>{cita.horaReservaCita}</td>
                        <td>{cita.estadoReservaCita ? 'Activo': 'Inactivo'}</td>
                    </tr>
                </tbody>
            )}
            </table>
        </div>
    )
}

export default CitasPages;