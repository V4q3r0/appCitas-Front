import CitasServices from '../../../services/citas_services';
import actions from './citas_actions';

const cargarCitasAsync = () => (dispatch) => {
    dispatch(actions.citasCargarInicio())

    CitasServices.getAllCitas()
    .then((response) => dispatch(actions.citasCargarCorrectamente(response.data)))
    .catch((error) => dispatch(actions.citasCargarError(error.message)));
};

export default cargarCitasAsync;