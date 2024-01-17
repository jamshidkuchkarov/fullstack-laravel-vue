import axios from "axios";
import config from "tailwindcss/defaultConfig.js";
import {getItem} from "@/helpers/persistaneStorage.js";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
axios.interceptors.request.use(config=>{
    const  token  = getItem('token')
    const authorization = token?token:null
    config.headers.Authorization = `Bearer ${authorization}`
    return config
})
export default axios;

