import  axios  from 'axios';

const BaseUrl = '/api';

export function request(config){
  const instance = axios.create({
    baseURL : BaseUrl,
    timeout : 5000,
    withCredentials:true
  })
  //请求拦截
  instance.interceptors.request.use(config =>{
    return config;
  },error => {
    console.log(error);
  })
  //响应拦截
  instance.interceptors.response.use( result =>{
    return result;
  },error => {
    console.log(error);
  })
  //返回请求结果
  return instance(config);
}
