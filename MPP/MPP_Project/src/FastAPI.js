import axios from 'axios';

const FastAPI = axios.create({
    baseURL: 'http://localhost:8000',
});

export default FastAPI;
