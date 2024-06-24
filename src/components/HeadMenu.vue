<template>
  <!--      background-color="#FFFFF0"-->
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
      background-color="#2f323c"
      text-color="#fff"
      active-text-color="#F6F7FBFF"
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
      <h3>
        <VaIcon name="va-arrow-first"/>Back
      </h3>
    </el-menu-item>

    <el-menu-item index="/">
      <el-icon>
        <HomeFilled/>
      </el-icon>
    </el-menu-item>
    <el-menu-item index="/blog"><h3>1024</h3></el-menu-item>
    <el-menu-item index="/notfound"><h3>reading</h3></el-menu-item>
    <el-menu-item index="/about"><h3>about</h3></el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {HomeFilled} from "@element-plus/icons-vue";

const router = useRouter();
const avatarSrc = "/logo.jpg"
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
