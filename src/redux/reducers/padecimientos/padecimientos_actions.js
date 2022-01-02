import actionTypes from './padecimientos_actionsTypes';

const padecimientosCargarInicio = () => ({
    type: actionTypes.PADECIMIENTOS_CARGAR_INICIO,
});

const padecimientosCargarCorrectamente = (padecimientos) => ({
    type: actionTypes.PADECIMIENTOS_CARGAR_CORRECTAMENTE,
    payload: padecimientos
});

const padecimientosCargarError = (mensajeError) => ({
    type: actionTypes.PADECIMIENTOS_CARGAR_ERROR,
    payload: mensajeError,
});

export default {
    padecimientosCargarInicio,
    padecimientosCargarCorrectamente,
    padecimientosCargarError,
};