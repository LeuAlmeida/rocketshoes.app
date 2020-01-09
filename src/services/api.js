import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/leualmeida/rocketshoes.app',
});

export default api;
