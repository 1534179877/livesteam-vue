<template>
   <el-header class="topbar">

   </el-header>
</template>

<script>
export default {
  name: 'TopBar',
  data(){
    return{

    }
  },
  props: {
    msg:String,
    username:String,
  },
  mounted() {

  }

}
</script>

<style scoped>
.topbar{
  background-color: gainsboro;
  width: auto;
  height: 50px;
  display: flex;
}
.left{
  position: absolute;
  left: 100px;

}
.user{
  position: absolute;
  right: 100px;
}
.logo{
  width: 50px;
}

</style>
