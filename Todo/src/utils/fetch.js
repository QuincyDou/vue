import axios from 'axios'
import {Message} from 'element-ui'
import store from '../store'
import {getToken} from "./auth"

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

//request拦截器
service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers['X-Token'] = getToken(); //让每个请求携带token
  }
  return config;
}, error => {
  // console.log('error:' + error);
  Promise.reject(error);
})

//response拦截器
service.interceptors.response.use(
  response => response,
  error => {
    // console.log('error:' + error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
)

export default service
