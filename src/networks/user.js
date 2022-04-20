import {request} from "@/networks/index";

const Beasurl = 'user';

export function register_user(user){
  return request({
    method:'post',
    url:`/${Beasurl}/register`,
    data:{
      id: user.phone,
      email:user.email,
      userName: user.username,
      password: user.password
    }
  })
}

export function login_user(user){
  return request({
    method:'post',
    url:`/${Beasurl}/login`,
    data:{

        userName: user.username,
        password: user.password

    }
  })
}
