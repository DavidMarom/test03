import axios from 'axios';


const http = axios.create({
    url: 'api/',
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: { "Content-type": "application/json" }
});

export default http;
