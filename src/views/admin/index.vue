<template>
  <topbar></topbar>
    <el-row class="tac">
      <el-col :span="4" style="height: 100vh">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="$route.path.split('/').pop()"
            text-color="#fff"
            :router="true"
        >
          <el-menu-item index="dashboard">
            <template #title >
              <el-icon><location /></el-icon>
              <span>dashboard</span>
            </template>
<!--            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>-->
          </el-menu-item>
          <el-menu-item index="about">
            <el-icon><icon-menu /></el-icon>
            <span>about</span>
          </el-menu-item>
          <el-menu-item index="test" >
            <el-icon><document /></el-icon>
            <span>test</span>
          </el-menu-item>
          <el-menu-item index="xixi">
            <el-icon><setting /></el-icon>
            <span>xixi</span>
          </el-menu-item>
          <el-menu-item index="xixi">
            <el-icon><setting /></el-icon>
            <span>xixi</span>
          </el-menu-item><el-menu-item index="xixi">
          <el-icon><setting /></el-icon>
          <span>xixi</span>
        </el-menu-item>
          <el-menu-item index="xixi">
            <el-icon><setting /></el-icon>
            <span>xixi</span>
          </el-menu-item>

        </el-menu>
      </el-col>
      <el-col :span="20" style="background-color: #F0F2F5">
        <h2>{{title}}管理</h2>
        <router-view></router-view>

      </el-col>
    </el-row>
</template>

<script>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import topbar from '../../components/topbar'
export default {
  name: "index",
  components: {
    Document,
    IconMenu,
    Location,
    Setting,
    topbar
  },
  computed: {
    title () {
      let path = this.$route.path.split('/').pop()
      switch (path) {
        case 'dashboard':
          return 'dashboard'
        case 'about':
          return 'about'
        case 'test':
          return 'test'
        case 'xixi':
          return 'xixi'
        default:
          return ''
      }
    }
  },
}
</script>

<style scoped>
el-row{

}

h2 {
  background-color: white;
  padding: 2rem;
}
</style>