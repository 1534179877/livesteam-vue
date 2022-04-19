<template>
  <el-header class="topbar">
    <div  class="container">
      <div class="topbar_menu">
        <a href="javascript:">直播</a>
        <a href="javascript:">手游</a>
        <a href="javascript:">网游</a>
        <a href="javascript:">学习</a>
      </div>

    </div>
    <div>
      <div class="user_cont">
        <el-avatar :size="50" :src="circleUrl" :fit="fill"/>
        <el-button>点击开播</el-button>
      </div>
    </div>
  </el-header>
</template>
<script setup>
import {computed} from 'vue';
import { useStore } from "vuex";

//通过userStore定义 store
const store = useStore();

//状态管理
const userName =  computed(() => store.getters.getUserinfo);


const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'


</script>

<style scoped>
.topbar{
  background-color: gainsboro;
  width: auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
}

.user_cont {
  display: flex;
  align-items: center;
}
.user_cont el-button{

}
.user_cont span{
  line-height: 100%;
}
.topbar_menu a{
  display: inline-block;
  color: #B0B0B0;
  margin-right: 17px;
  text-decoration:none;
}
.topbar_menu a:last-child{
  margin-right: 0;
}

</style>