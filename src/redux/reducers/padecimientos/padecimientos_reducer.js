import actionTypes from './padecimientos_actionsTypes';
import initialState from './padecimientos_initialState';

const padecimientosReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case actionTypes.PADECIMIENTOS_CARGAR_INICIO:
            return{
                ...state,
                estaCargando: true,
                padecimientos: null,
                mensajeError: null,
            };
        
        case actionTypes.PADECIMIENTOS_CARGAR_CORRECTAMENTE:
            return{
                ...state,
                estaCargando: false,
                padecimientos: payload
            };
        
        case actionTypes.PADECIMIENTOS_CARGAR_ERROR:
            return{
                ...state,
                estaCargando: false,
                mensajeError: payload,
            }
    
        default:
            return state
    }
}

export default padecimientosReducer;