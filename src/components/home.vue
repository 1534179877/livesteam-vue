<template>
<!--  <div class="login_card">
    <login_card :islogin="islogin"></login_card>
  </div>-->
  <div class="container">
    <div class="player-area">

    </div>
    <div class="area_detail">
      <h2>推荐直播</h2>
      <div  class="room-detail">
        <room_card v-for="room in roomList" :key="room.index"
                   :roomTital='room.roomTital'
                   :userName='room.userName'
                   :watchnum='room.watchnum' >
        </room_card>
      </div>
      <div>

      </div>
    </div>
  </div>

</template>

<script setup>
//import Login_card from "@/components/widget/login_card";
import Room_card from "@/components/widget/room_card";
//import { useStore } from "vuex";
//const store = useStore();
//const islogin = true;


const roomList = [{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
},{
  roomTital: 'gggggggggggg',
  userName: 'pxy',
  watchnum: 8
}]


</script>

<style scoped>

</style>
