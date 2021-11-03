import axios from "axios";

const api = axios.create({
    baseURL:'http://naobanco-dev.herokuapp.com/',
});

export default api;