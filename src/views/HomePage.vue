<script setup>
import {CATEGORY_CONFIG, CATEGORY_COUNT} from '../util/CategoryUtil'
import {useRouter} from 'vue-router'
import {ROUTER_BLOG_PANEL} from "../router/router_names.js";


const category_map = {}
for (let i = 1; i <= CATEGORY_COUNT; i = i + 2) {
  if (i === CATEGORY_COUNT) {
    category_map[i] = [CATEGORY_CONFIG[i]]
  } else {
    category_map[i] = [CATEGORY_CONFIG[i], CATEGORY_CONFIG[i + 1]]
  }
}

const router = useRouter();
const goto = (category) => {
  return router.push(`/${ROUTER_BLOG_PANEL}/${category}`)
}

const buildHerf = (category) => {
  return "/panel/" + category
}

</script>
<template>
  <el-carousel height="200px" motion-blur>
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-row :gutter="10" style="width: 100%">

<!--    <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="1">-->
<!--      <div class="grid-content ep-bg-purple" style="background-color: #2b825f;"/>-->
<!--    </el-col>-->
  </el-row>
  <el-row :gutter="10" style="width: 100%">
    <el-col :xs="12" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple" style="background-color: #e6d2d2;"/>
    </el-col>
    <el-col :xs="12" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple" style="background-color: #7b7bb5;"/>
    </el-col>
  </el-row>
</template>

<style scoped>
.grid-content {
  min-height: 36px;
}
</style>
