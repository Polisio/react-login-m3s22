import axios from "axios";
const URL_WS = process.env.REACT_APP_API

const loginService = async (data)=>{
    return await axios.post(`${URL_WS}/login`, data);
};

const registerService = async (data)=>{
    return await axios.post(`${URL_WS}/singup`, data)
}

export {loginService, registerService};