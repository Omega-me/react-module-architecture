import axios, { AxiosInstance } from 'axios';

export const httpConnector: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {},
});
