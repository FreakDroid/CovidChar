import axios from 'axios';
import { apiRoutes } from '../routes/routes';
import {config} from './config';

function CovidApi() {
  const axiosInstance = axios.create(config);

  const requestHandler = (request) => {
    request.headers['Content-Type'] = 'application/json';
    return request;
  };
  const errorHandler = (err) => Promise.reject(err);
  const successHandler = (response) => {
    return response.data;
  };

  axiosInstance.interceptors.request.use(requestHandler);
  axiosInstance.interceptors.response.use(successHandler, errorHandler);


  return {
    getAllCovidInfo() {
      return axiosInstance.get(apiRoutes.getAllCovidInfo).then((response) => response)
    },

    getStateCovidInfo(state) {
      return axiosInstance.get(apiRoutes.getStateCovidInfo(state)).then((response) => response)
    },
  }
}

export const covidApi = CovidApi();