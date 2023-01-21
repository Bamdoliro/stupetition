import axios from 'axios';
import { BASE_URL } from 'config/config';

const customAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default customAxios;
