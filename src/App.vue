<template>
  <div class="common-layout">
    <el-container>
      <el-header><head-menu/></el-header>
      <el-container>
        <el-aside class="el-aside-left"><left-aside/></el-aside>
        <el-main><router-view style="width:100%"/></el-main>
        <el-aside class="el-aside-right"><right-aside/></el-aside>
      </el-container>
    </el-container>
  </div>
</template>



<script setup>
import {RouterView} from 'vue-router'
import HeadMenu from './components/HeadMenu.vue'
import LeftAside from './components/LeftAside.vue'
import RightAside from "./components/RightAside.vue";

</script>
<style scoped>

.el-header {
  position: relative;
  background-color: #2f323c;
}

.el-main {
  background-color: #2f323c;
  width: 76%;
  position: absolute;
  left: 12%;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.el-aside-left {
  background-color: #2f323c;
  width: 12%;
  display: block;
  position: absolute;
  margin-left: 0;
  top: 60px;
  bottom: 0;
}

.el-aside-right {
  background-color: #2f323c;
  width: 12%;
  display: block;
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  margin-left: 88%;
}
</style>

