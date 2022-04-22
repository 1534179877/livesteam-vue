<template>
  <el-card class="box-card card"  @click="detail">
    <span>{{cardName}}</span>
    <el-button style="float: right; padding: 3px 0;" type="text" >

        <el-icon v-if="type === 'created'" :size="20" @click.stop="$emit('deleteCard')">
          <circle-close/>
        </el-icon>




      <el-icon v-else @click.stop="$emit('addCard')" :size="20">
        <circle-plus/>
      </el-icon>
    </el-button>
  </el-card>

</template>

<script>
import { CirclePlus ,CircleClose} from "@element-plus/icons-vue";

import {mapGetters} from 'vuex'

export default {
  name: 'kanbanCards',
  data() {
    return {
      dialogVisible: false,
      dlkanban:{
        name:'',
        userName:''
      }
    }
  },
  components:{
    CirclePlus,
    CircleClose
  },
  props: {
    type: String,
    cardName: String,
    cardId : Number
  },
  methods: {
    ...mapGetters([
      'getUserinfo'
    ]),
    addCard(){

    },
    detail(){
      this.$router.push('/detail/'+this.cardName)
    },

  }

}
</script>

<style scoped>
.card{
  width: 300px;
  height: 100px;
  display: inline-block;
  margin-right: 10px;
}
</style>
