import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    post: axios.post,
    get: axios.get,
    put: axios.put,
    delete: axios.delete
}