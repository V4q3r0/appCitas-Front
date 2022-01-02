import apiClient from "../helper/apiClient";

class PadecimientosServices {
    getAllPadecimientos = () => apiClient().get("padecimientos")
}

export default new PadecimientosServices();