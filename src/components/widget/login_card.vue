<template>
  <div class="container" v-show="islogin">
    <div class="login_content" >
     <el-tabs v-model="activeName">
       <el-tab-pane label="账号登录" name="first" >
         <el-input placeholder="输入用户名"
                   v-model="username" :span="2"></el-input>
         <el-input placeholder="输入密码"
                   type="password"
                   show-password
                   v-model="password"></el-input>
         <el-button @click="register">注册</el-button>
         <el-button @click='login'>登录</el-button>
       </el-tab-pane>
       <el-tab-pane label="电话登录" name="second">
         <el-input placeholder="输入电话号码"
                   v-model="username" maxlength="11"></el-input>
         <el-input placeholder="输入验证码"
                   type="text"
                   maxlength="4"
                   v-model="password"></el-input>
         <el-button @click="register">发送验证码</el-button>
         <el-button @click='login'>登录</el-button>

       </el-tab-pane>

     </el-tabs>
    </div>
  </div>
 </template>

<script setup>
import { ref ,defineProps} from 'vue'
import { register_user ,login_user} from '@/networks/user'
import { useStore } from 'vuex'

defineProps({
  islogin : Boolean
})

const username = ref('');
const password = ref('');
const activeName = 'first';
const store = useStore();



//注册
function register(){
  register_user(username.value,password.value).then( result => {
    console.log(result);
    if(result.data.status === 200){
      console.log(result.data.msg);
      alert(result.data.msg);
    } else{
      console.log(result.data.msg);
    }
  }).catch(error =>{
    console.log(`请求失败:${error}`)
  })
}
//登录
function login(){
  login_user(username.value,password.value).then( req => {
    if(req.data.status === 200){
      //唤醒mutation
      store.commit('setUserInfo',username);
    }
    alert(req.data.msg);
  }).catch(error =>{
    console.log(`请求失败：${error}`)
  })
};
</script>

<style scoped >
.container {
  z-index: 10;
  background-color: green;
  width: 400px;
  height: 200px;
  border-radius: 5%;
}

</style>
