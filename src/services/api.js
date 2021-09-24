import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users/1/albums'
});

export default api;