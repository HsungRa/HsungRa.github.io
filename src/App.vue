<template>
  <div class="common-layout">
    <el-container style="background-color: rgba(255, 255, 255, 1);color: rgba(0, 0, 0, 0.8);">
      <el-header><head-menu/></el-header>
      <el-container>
        <router-view style="width:100%" v-if="isRouterAlive"/>
<!--        <el-aside class="el-aside-left" ><left-aside/></el-aside>-->
<!--        <el-main><router-view style="width:100%" v-if="isRouterAlive"/></el-main>-->
<!--        <el-aside class="el-aside-right"><right-aside/></el-aside>-->
      </el-container>
    </el-container>
  </div>
</template>



<script setup>
import {nextTick, provide, reactive, ref} from 'vue'
import {RouterView} from 'vue-router'
import HeadMenu from './components/HeadMenu.vue'
import LeftAside from './components/LeftAside.vue'
import RightAside from "./components/RightAside.vue";

let isRouterAlive = ref(true);
const globalConfig = reactive({
  color: "#2f323c", // 全局背景色
});

const reload =()=>{
  isRouterAlive.value=false;
  nextTick(() => {
    // globalConfig.color = "#f68b5d"
    isRouterAlive.value=true;
  })
}
provide(
    'reload', reload
)
provide(
    'globalConfig', globalConfig
)
provide("rightAsideConfig", reactive({
  type: 0, // 0: article toc
  value : []
}));

</script>
<style scoped>

.el-header {
  width: 100%;
  position: relative;
//background-color: #2f323c;
}

.el-main {
//background-color: #2f323c;
  width: 88%;
  position: absolute;
  left: 12%;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.el-aside-left {
//background-color: #2f323c;
  width: 12%;
  display: block;
  position: absolute;
  margin-left: 0;
  top: 60px;
  bottom: 0;
}

.el-aside-right {
//background-color: #2f323c;
  width: 12%;
  display: block;
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  margin-left: 88%;
}
</style>

