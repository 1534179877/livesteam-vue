<template>
  <TopBar msg="live index" username="pdd"></TopBar>
  <router-link to="/Home/home">Go to Home</router-link>
  <router-link to="/Home/about">Go to About</router-link>
  <router-link to="/Home/helloword">Go to helloword</router-link>
  <router-view></router-view>
</template>

<script>
import TopBar from '../components/topbar.vue'

export default {
  name: "HomePage",
  components:{
    TopBar
  }
}
</script>

<style scoped>

</style>
