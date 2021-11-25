import axios from "axios";

const api = axios.create({
    baseURL:'https://naobanco-dev.herokuapp.com/',
});

export default api;