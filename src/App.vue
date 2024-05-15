<template>
  <div class="common-layout">
    <el-container>
      <el-header><head-menu></head-menu></el-header>
      <el-container>
        <el-aside width="12%"></el-aside>
        <el-main>
          <router-view/>
        </el-main>
        <el-aside width="2%"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import HeadMenu from './components/HeadMenu.vue'

</script>

