import axios from 'axios';

const apiClient = () => {
    const API_URL = "https://reserva-citas.herokuapp.com/"; 

    const axiosInstance = axios.create({
        baseURL: API_URL,
        responseType: 'json',
    });

    return axiosInstance;
}

export default apiClient;