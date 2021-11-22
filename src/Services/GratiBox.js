import axios from "axios";
const URL = "http://localhost:4000/grati-box"

function createConfig (token){
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export function postSignInRequest(body) {
  return axios.post(`${URL}/sign-in`, body);
}

export function postSignUpRequest(body) {
  return axios.post(`${URL}/sign-up`, body);
}

export function postPlanSignRequest(token, body) {
  
  return axios.post(`${URL}/planSign`, body, createConfig(token));
}