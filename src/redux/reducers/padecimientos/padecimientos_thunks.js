import PadecimientosServices from '../../../services/padecimientos_services';
import actions from './padecimientos_actions';

const cargarPadecimientosAsync = () => (dispatch) => {
    dispatch(actions.padecimientosCargarInicio())

    PadecimientosServices.getAllPadecimientos()
    .then((response) => dispatch(actions.padecimientosCargarCorrectamente(response.data)))
    .catch((error) => dispatch(actions.padecimientosCargarError(error.message)));
};

export default cargarPadecimientosAsync;