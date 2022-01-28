import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import Auth, { BASE_URL } from "./cookies.config";
import toast from "react-hot-toast";

axios.defaults.baseURL = BASE_URL;

const notifyError = (msg: string) => {
  toast.error(msg);
};

function errorhandler(error: Error) {
  if (error.message === "Network Error") {
    notifyError("Network connection lost. Connect and try again");
    return;
  }
  return Promise.reject({ ...error });
}

function successHandler(response: AxiosResponse<any>): AxiosResponse<any> {
  return response;
}

async function setToken(configT: AxiosRequestConfig) {
  try {
    const data: any = Auth.getCipher();
    if (data) {
      configT.headers.Authorization = data;
    }
    configT.headers.Accept = "application/json";
    return configT;
  } catch (err) {
    console.log(err);
  }
}

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorhandler(error)
);

axios.interceptors.request.use(
  (configT) => setToken(configT),
  (error) => Promise.reject(error)
);

export function post<Type>(route: string, payload: Type) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "post",
      data: payload,
      url: route,
    })
      .then(resolve)
      .catch(reject);
  });
}

export function put<Type>(route: string, payload: Type) {
  return new Promise(function (resolve, reject) {
    axios.put(route, payload).then(resolve).catch(reject);
  });
}

export function get(route: string) {
  return new Promise((resolve, reject) => {
    axios.get(route).then(resolve).catch(reject);
  });
}

export const delete_request = (route: string) =>
  new Promise((resolve, reject) => {
    axios.delete(route).then(resolve).catch(reject);
  });

export const all = (routes: any[]) =>
  new Promise((resolve, reject) => {
    axios
      .all(routes)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
