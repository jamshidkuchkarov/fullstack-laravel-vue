import axios from "./axios.js";

const AuthService = {
        register(user){
           return axios.post('/register',user)
        }
}

export default AuthService;
