import apiClient from "../helper/apiClient";

class CitasServices {
    getAllCitas = () => apiClient().get("citasReactivas")
}

export default new CitasServices();