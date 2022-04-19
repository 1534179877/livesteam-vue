import {request} from "@/networks/index";

const Beasurl = 'user';

export function register_user(UserName,passWord){
  return request({
    method:'post',
    url:`/${Beasurl}/register`,
    data:{
      userName: UserName,
      passWord: passWord
    }
  })
}

export function login_user(data){
  return request({
    method:'post',
    url:`/${Beasurl}/login`,
    data:{
      nickname: data.userName,
      password: data.passWord
    }
  })
}
