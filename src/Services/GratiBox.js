import axios from "axios";
const URL = "http://localhost:4000/grati-box"

export function postSignInRequest(body) {
  return axios.post(`${URL}/sign-in`, body);
}

export function postSignUpRequest(body) {
  return axios.post(`${URL}/sign-up`, body);
}