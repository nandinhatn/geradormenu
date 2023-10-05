import axios from 'axios';

const api = axios.create({
    baseURL: "https://poppytecnologias.com.br:21224" 
})
export default api;