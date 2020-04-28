import axios from "axios";
import { REACT_APP_API_URL } from "config";

export const STATUS_CODE_BAD_REQUEST = 400;
export const STATUS_CODE_UNAUTHORIZED = 401;
export const STATUS_CODE_NOT_PERMITTED = 403;
export const STATUS_CODE_NOT_FOUND = 404;

interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: Body;
  timeout?: number;
}

const api = async (path: string, options: Options) => {
  const token = await localStorage.getItem("authToken");
  const result = await axios({
    url: path,
    baseURL: REACT_APP_API_URL,
    headers: { "x-auth-token": token },
    timeout: 10000,
    ...options
  })
    .then(response => response)
    .catch(err => console.log(err));
  return result;
};
/*
const api = async (path: string, options: Options) => {
  const result = await axios({
    method: options.method,
    url: REACT_APP_API_URL + path
  });

  if (result.status >= STATUS_OK_CODE_FROM && result.status < STATUS_OK_CODE_TO)
    return result.data;

  result.

    const error = new Error(response.statusText) as ResponseError;
    error.response = response;
    error.parsed = await parseJSON(response);
    throw error;
};
*/

export default api;