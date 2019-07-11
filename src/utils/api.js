import axios from 'axios';

import { baseURL } from '../config';

const instance = axios.create({ baseURL, timeout: 600000 })

export default {
  get: (url, data) => {
    return request('get', url, data);
  },
  post: (url, data) => {
    return request('post', url, data);
  },
  put: (url, data) => {
    return request('put', url, data);
  },
  delete: (url, data) => {
    return request('delete', url, data);
  }
}

const request = (method, url, data, token) => {
  if (method === 'get') {
    return instance.request({
      method, url, params: data
    }).then(res => res.data)
      .catch(err => handleError(err));
  } else {
    return instance.request({
      method, url, data
    }).then(res => res.data)
      .catch(err => handleError(err))
  }
}

const handleError = (err) => {
  if (err.response.data) {
    throw err.response.data;
  } else if (err.response) {
    throw err.response;
  } else {
    throw err;
  }
}