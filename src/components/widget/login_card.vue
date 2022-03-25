<template>
  <div class="container">
    <div class="login_content">
      <div class="signflow">
        <div></div>
      </div>
      <el-input placeholder="输入用户名"
                v-model="username"></el-input>
      <el-input placeholder="输入密码"
                type="password"
                show-password
                maxlength="11"
                v-model="password"></el-input>
      <el-button @click="register"> 登录 </el-button>
      <el-button @click='getuser'>getuser</el-button>
    </div>
  </div>
 </template>

<script setup>
import {ref} from 'vue'
import { register_user ,get_user} from '@/networks/user'

const username = ref('');
const password = ref('');

function register(){
  register_user(username.value,password.value).then( result => {
    console.log(result);
    if(result.data.status === 200){
      console.log(result.data.msg);
    } else{
      console.log(result.data.msg);
    }
  }).catch(error =>{
    console.log(`请求失败:${error}`)
  })
}

function getuser(){
  get_user().then(req=>{
    console.log(req);
  }).catch(error =>{
    console.log(`请求失败：${error}`)
  })
}

</script>

<style scoped>
.container{
  z-index: 10;
  background-color: yellow;
  width: 400px;
  height: 200px;
}

</style>
