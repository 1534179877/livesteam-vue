<template>
  <div class="dashboard-container">

    <div v-for="card in Kblist" :key="card.KbId" style="display: inline-block">
      <kanban-cards type="created" :cardName="card.cardName"></kanban-cards>
    </div>
    <kanban-cards type="creat" @addCard="showCard = !showCard " cardName="创建看板"></kanban-cards>
    <el-card class="box-card fixcard" v-show="showCard">
      <header><i>创建看板</i>
        <el-icon style="float: right" @click="showCard = !showCard "><circle-close /></el-icon>
      </header>
      <div class="kanbanform">
        <el-form class="kanbanform">
          <el-form-item>
            <el-input placeholder="请输入看板名字" v-model="newKb.name"></el-input>
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
import {getkanban} from "@/networks/admin/dashboard";

export default {
  name: "dashborad",
  components: {
    kanbanCards,
    CircleClose
  },
  data(){
    return {
      showCard: false,
      Kblist: [
        {
          KbId: 1,
          cardName: 'first'
        }, {
          KBid: 2,
          cardName: 'first2'
        }, {
          KBid: 3,
          cardName: 'first3'
        }, {
          KBid: 4,
          cardName: 'first4'
        }
      ],
      newKb: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.Kblist.push({KbId: this.Kblist.length + 1, cardName: this.newKb.name})
      this.showCard = !this.showCard
    },
    getKanbanlist(){
      getkanban('admin').then(res =>{
        console.log(res);
      })
    }
  },

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