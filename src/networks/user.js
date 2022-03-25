import {request} from "@/networks/index";

const Beasurl = 'users';

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

export function get_user(){
  return request({
    method:'get',
    url:`/${Beasurl}/getuser`,
  })
}
