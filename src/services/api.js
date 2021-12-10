import axios from "axios";

const api = axios.create({
    baseURL:'https://naobanco-dev.herokuapp.com/',
    // baseURL:'http://10.0.2.2:3000/'
});

export default api;