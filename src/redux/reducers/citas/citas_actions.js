import actionTypes from './citas_actionTypes';

const citasCargarInicio = () => ({
    type: actionTypes.CITAS_CARGAR_INICIO,
});

const citasCargarCorrectamente = (citas) => ({
    type: actionTypes.CITAS_CARGAR_CORRECTAMENTE,
    payload: citas
});

const citasCargarError = (mensajeError) => ({
    type: actionTypes.CITAS_CARGAR_ERROR,
    payload: mensajeError,
});

export default {
    citasCargarInicio,
    citasCargarCorrectamente,
    citasCargarError,
};