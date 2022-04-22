<template>
  <topbar></topbar>
<!-- 主要部分 -->
  <div class=" main-box">
    <div class="stage-item" v-for="drag in lists" :key="drag.id">
      <div class="stage-header" >
        <div class="title">{{drag.status}}</div>
        <div>
          <!--看板按钮  大的-->
          <el-button circle type="primary" size="mini" @click="addKanbanitem(drag.id)">
            <el-icon>
              <Plus/>
            </el-icon>
          </el-button>
          <el-button circle type="danger" size="mini" class="delstage" @click="deleteStatus">
            <el-icon>
              <Close/>
            </el-icon>
          </el-button>
        </div>
      </div>
      <draggable

          class="list-group-stage"
          :list="drag.kapians"
          group="yongdaoId"
          itemKey="id"
          @start="onstart"
          @mousedown="dow(drag.id)"
          @end="submitchange"

      >
        <template #item="{element,index}" >
            <div class="list-group-item stage-header">
              <span class="name" >
                {{element.info}},{{element.kaid}}
              </span>
              <span>
                <el-icon @click="deleteKanbanitem" class="close-item">
                  <CircleClose/></el-icon>
              </span>
            </div>
        </template>
      </draggable>
    </div>

    <!--  添加阶段部分-->
    <div class="undraggable">
      <el-button type="text" @click="addStatus">添加任务阶段</el-button>
    </div>
  </div>


</template>

<script>
import topbar from '@/components/topbar'
import draggable from "vuedraggable";
import {kanbanDetail} from "@/networks/admin/dashboard";
import {Plus, Close, CircleClose} from '@element-plus/icons-vue'
import {addCard, dragCard} from "@/networks/admin/card";
import {ElMessage} from "element-plus";

export default {
  name: "detail",
  components: {
    CircleClose,
    topbar ,
    draggable,
    Plus,
    Close
  },
  order:0,
  data(){
    return {
      kanban:{
        kanbanid:'',
        kanbanName:'',
        userName:'admin'
      },
      lists:[
        {
          status:'hhhhhh',
          kapians:[
            { info: "John", yongdaoId: 1 , kaid: 1},
            { info: "Joao", yongdaoId: 1 , kaid: 2},
            { info: "Jean", yongdaoId: 1 , kaid: 3},
            { info: "Gerard", yongdaoId: 1 , kaid: 4}
          ],
          id : 1,
          kanbanId :1
        },
        {
          status:'hhhfdashhh',
          kapians:[
            { info: "Juan", yongdaoId: 2, kaid: 5 },
            { info: "Edgard", yongdaoId: 2 , kaid: 6},
            { info: "Johnson", yongdaoId: 2 , kaid: 7}
          ],
          id:2,
          kanbanId :1
       }
      ],
      newCardInfo:'aaaaa',
      changekaId:'',
      toId:''
    }
  },
  created() {
    let { cardName } = this.$route.params;
    this.kanban.kanbanName = cardName;
    this.initDetail();
  },
  computed: {

  },
  methods: {
    //获取卡片id
    onstart(evt){
      this.changekaid = evt.item._underlying_vm_.kaid;
    },
    //获取泳道id
    dow(id){
      this.toId = id;
    },
    //提交修改
    submitchange(){
      dragCard(this.changekaid,this.toId).then(res =>{
        if(res.data.code == '0'){
          ElMessage({
            type:'success',
            message:'拖拽成功',
          });
          this.initDetail()
          this.changekaid = ''
          this.toId = ''
        }
      })
    },
    //初始化
    initDetail(){
      kanbanDetail(this.kanban).then( res =>{
        if(res.data.code == '0'){
          this.lists = res.data.data;
          console.log(this.lists)
        }
      })
    },

    addStatus(){

    },
    //添加卡片
    addKanbanitem(id){
      addCard(id,this.newCardInfo).then( res =>{
        if(res.data.code =='0'){
          ElMessage({
            type:'success',
            message: '添加成功'
          })
          this.initDetail();
        }
      })
    },
    deleteStatus(){

    },
    deleteKanbanitem(){

    }

  },


}
</script>

<style scoped>
.undraggable {
  margin-right: 20px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  top: -15px;
}
.stage-item {
  height: 100%;
  border-radius: 4px;
  width: 300px;
  display: inline-flex;
  flex-direction: column;
  margin-right: 20px;
  align-items: stretch;
  background-color: #eee;
  box-shadow: 2px 2px 5px #d2d2d2;
}
.main-box {
  width: 100% !important;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  padding: 20px;
  background-color: #fff;
}
.stage-header {
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: move;
}

.list-group-stage {
  overflow-y: auto;
}
.stage-header .name {
  white-space: normal;
  width: 220px
}
.stage-header .title {
  margin: 5px;
  font-size: 16px
}
.close-item {
  font-size: 20px;
  cursor: pointer;
  color: #aaa;
  display: none
}

.list-group-item {
  cursor: move;
  margin: 10px !important;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #d2d2d2;
}

.delstage {
  display: none;
}
.stage-item:hover .delstage {
  display: inline-block;
}

.close-item {
  font-size: 20px;
  cursor: pointer;
  color: #aaa;
  display: none
}

.list-group-item:hover .close-item {
  display: block;
}
</style>