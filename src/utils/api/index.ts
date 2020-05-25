import axios, { AxiosError } from "axios";
import { REACT_APP_API_URL } from "config";

import { ErrorType } from "utils/constants";

const STATUS_CODE_FROM = 200;
const STATUS_CODE_TO = 300;
export const STATUS_CODE_BAD_REQUEST = 400;
export const STATUS_CODE_UNAUTHORIZED = 401;
export const STATUS_CODE_NOT_PERMITTED = 403;
export const STATUS_CODE_NOT_FOUND = 404;

export const parseJSON = async (response: Body) => {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

export interface ResponseError extends Error {
  response: Response;
  parsed: Body;
}

interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: object;
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
    .catch((err: AxiosError<ErrorType>) => {
      throw err.response ? err.response.data : err;
    });
  return result;
};
/* TO DELETE!!!
export const parseJSON = async (response: Body) => {
  const text = await response.text();
  return text ? JSON.parse(text) : {};
};

export interface ResponseError extends Error {
  response: Response;
  parsed: Body;
}

interface Options {
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: object;
  timeout?: number;
}

const api = async (path: string, options: Options) => {
  const token = await localStorage.getItem("authToken");
  const response = await axios({
    url: path,
    baseURL: REACT_APP_API_URL,
    headers: { "x-auth-token": token },
    timeout: 10000,
    ...options
  });
  if (response.status >= STATUS_CODE_FROM && response.status < STATUS_CODE_TO) {
    return response;
  } else {
    const error = new Error(response.statusText) as ResponseError;
      error.response = response;
      error.parsed = await parseJSON(response);
      throw error;
    }
  };


/*

const api = async (path: string, options: Options, setNotification?: (payload: NotificationsTypes) => Actions) => {
  const token = await localStorage.getItem("authToken");
  const result = await axios({
    url: path,
    baseURL: REACT_APP_API_URL,
    headers: { "x-auth-token": token },
    timeout: 10000,
    ...options
  })
    .then(response => response)
    .catch((err: AxiosError<ErrorType>) => setNotification ? setNotification(err.response?.data.code) :  err);
  return result;
};


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
