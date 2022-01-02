import { combineReducers } from 'redux';
import citasReducer from './citas/citas_reducer';
import padecimientosReducer from './padecimientos/padecimientos_reducer';

const rootReducer = () =>
    combineReducers({
        citas: citasReducer,
        padecimientos: padecimientosReducer,
    });

export default rootReducer;