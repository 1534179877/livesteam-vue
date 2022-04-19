<template>
  <div class="room_card">
    <a href="">
      <div class="cover">
        <img src="" alt="" >
      </div>
      <div class="card-info">
        <span>{{ props.roomTital }}</span>
        <div>
          <span>{{ props.userName }}</span>
          <span>{{ props.watchnum }}</span>
        </div>
      </div>
    </a>

  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  roomTital : String,
  userName : String,
  watchnum : Number
})



</script>

<style scoped>

.room_card{
  display: inline-block;
  width: 188px;
  height: 155px;
  margin: 10px;
}
.room_card :hover{
  transform: scale(1.2);
}

.cover{
  width: 100%;
  height: 105px;
  background-color: yellow;
}
.card-info span{
}
.card-info span:last-child{
  float: right;
}

</style>