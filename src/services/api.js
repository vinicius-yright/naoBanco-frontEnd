import axios from "axios";

const api = axios.create({
    baseURL:'https://naobanco-dev.herokuapp.com/',
    // baseURL: "http://192.168.0.11:3000/"
    baseURL:'http://naobanco-dev.herokuapp.com/'
});

export default api;