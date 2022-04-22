<template>
  <div class="dashboard-container">

    <div v-for="card in Kblist" :key="card.Kbid" style="display: inline-block">
      <kanban-cards type="created" :cardName="card.name" :cardId="card.id" @deleteCard="deleteCard(card.name)"></kanban-cards>
    </div>
    <kanban-cards type="creat" @addCard="showCard = !showCard " cardName="创建看板"></kanban-cards>
    <el-card class="box-card fixcard" v-show="showCard">
      <header><i>创建看板</i>
        <el-icon style="float: right" @click="showCard = !showCard"><circle-close /></el-icon>
      </header>
      <div class="kanbanform">
        <el-form class="kanbanform">
          <el-form-item>
            <el-input placeholder="请输入看板名字" v-model="newKbName"></el-input>
            <p>看板标题必选哦~</p>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="showCard = !showCard ">取消</el-button>
          </el-form-item>
        </el-form>

      </div>
    </el-card>

  </div>
</template>

<script>
import kanbanCards from "@/components/Cards/kanbanCards";
import { CircleClose } from '@element-plus/icons-vue'
import {getkanban, addkanban, deletekanban} from "@/networks/admin/dashboard";
import {  ElMessage } from "element-plus";
import {mapGetters} from "vuex";

export default {
  name: "dashborad",
  components: {
    kanbanCards,
    CircleClose
  },
  data(){
    return {
      showCard: false,
      Kblist: [],
      newKbName:'',
      userName:'',
      deKbName:'',
      isDelete:false,
      showdecard:false
    }
  },
  methods: {
    ...mapGetters([
        "getUserinfo"
    ]),
    onSubmit() {
      addkanban(this.newKbName,this.userName).then( res =>{
        if(res.data.code == '0'){
          this.getKanbanlist()
          this.showCard = !this.showCard
          this.newKb.name = ''
          ElMessage({
            message: `success!`,
            type: 'success',
          })
        }else{
          ElMessage({
            message: `error:${res.data.msg}`,
            type: 'error',
          })
        }

      })
    },
    getKanbanlist(){
      getkanban('admin').then(res =>{
        this.Kblist = res.data.data;
      })
    },
    sureDelete(){
      return this.isDelete;
    }
    ,
    async deleteCard(name){
      //this.showdecard = true;
      //await this.sureDelete();
      deletekanban(name,this.userName).then( res =>{
        if(res.data.code =='0'){
          this.getKanbanlist();
          ElMessage({
            type:"success",
            message:'删除成功'
          })
        }
      })
    }
  },
  created() {
    this.userName = this.getUserinfo();
    this.getKanbanlist();
  }

}
</script>

<style scoped>
.dashboard-container{
  margin: 30px;
}
.fixcard{
  position: fixed;
  width: 300px;
  height: 600px;
  top: 10px;
  right: 100px;
}
</style>