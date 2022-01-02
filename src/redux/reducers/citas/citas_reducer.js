import actionTypes from './citas_actionTypes';
import initialState from './citas_initialState';

const citasReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case actionTypes.CITAS_CARGAR_INICIO:
            return{
                ...state,
                estaCargando: true,
                citas: null,
                mensajeError: null,
            };
        
        case actionTypes.CITAS_CARGAR_CORRECTAMENTE:
            return{
                ...state,
                estaCargando: false,
                citas: payload
            };
        
        case actionTypes.CITAS_CARGAR_ERROR:
            return{
                ...state,
                estaCargando: false,
                mensajeError: payload,
            }
    
        default:
            return state
    }
}

export default citasReducer;