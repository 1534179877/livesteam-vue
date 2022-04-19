<template>
  <div class="topbar">
    <TopBar></TopBar>
  </div>
  <router-link to="/Home/home">Go to Home</router-link>
  <router-link to="/Home/about">Go to About</router-link>
  <router-link to="/Home/helloword">Go to helloword</router-link>
  <div class="main">
    <router-view></router-view>
  </div>


</template>

<script setup>
import TopBar from '../components/topbar.vue'


</script>

<style scoped>
.main{
  background-color: aquamarine;
}
</style>
