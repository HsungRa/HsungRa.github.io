<template>
  <!--      background-color="#FFFFF0"-->
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
      @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-col :span="12">
        <div class="block">
          <el-avatar :size="49" :src="avatarSrc"/>
        </div>
      </el-col>
    </el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item @click="onBack">
      <VaIcon name="va-arrow-first"/>
      Back
    </el-menu-item>
    <el-menu-item index="/">Home</el-menu-item>
    <!--    <el-menu-item index="/blog">Category</el-menu-item>-->
    <el-menu-item index="/about">About Me</el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter();
const avatarSrc = "/src/assets/logo.jpg"
const activeIndex = ref('1')

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const onBack = () => {
  router.back()
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
