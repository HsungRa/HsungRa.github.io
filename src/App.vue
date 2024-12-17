<script setup>
import { provide, reactive, ref} from 'vue'
import {RouterView} from 'vue-router'
import HeadMenu from './components/HeadMenu.vue'
import LeftAside from './components/LeftAside.vue'
import {activeTheme} from './style/Themes.js'

const globalConfig = reactive({
  leftAsideConfig: {
    show: false,
    type: null,
    args : null
  }
});

provide(
    'globalConfig', globalConfig
)

</script>
<template>
  <div class="app-wrapper" :style="activeTheme">
    <el-container>
      <el-header class="header">
        <head-menu :style="activeTheme"/>
      </el-header>
      <el-container class='content-wrapper'>
        <el-aside class="menu">
          <left-aside v-if="globalConfig.leftAsideConfig.show" :args="globalConfig.leftAsideConfig.args" :left-type="globalConfig.leftAsideConfig.type" :style="activeTheme"/>
        </el-aside>
        <el-main class="content">
          <router-view style="width:100%; height:100%;"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
}

.header {
  height: 50px;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
}

.menu {
  position: relative;
  top: 0;
  left: 0;
  width: 220px;
  height: calc(100vh - 50px);
}

.content {
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
</style>
