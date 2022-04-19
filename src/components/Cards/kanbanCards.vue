<template>

  <el-card class="box-card card" >
    <span>看板：{{cardName}} </span>
    <el-button style="float: right; padding: 3px 0;" type="text" >
      <el-icon v-if="type === 'created'" :size="20">
        <circle-close/>
      </el-icon>
      <el-icon v-else @click="$emit('addCard')" :size="20">
        <circle-plus/>
      </el-icon>
    </el-button>
  </el-card>

</template>

<script>
import { CirclePlus ,CircleClose} from "@element-plus/icons-vue";

export default {
  name: 'kanbanCards',
  data() {
    return {
      dialogVisible: false
    }
  },
  components:{
    CirclePlus,
    CircleClose
  },
  props: {
    type: String,
    cardName: String
  },
  methods: {
    addCard(){
      alert('fdsf')
    }
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
