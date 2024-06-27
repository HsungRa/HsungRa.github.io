<script setup>
import {CATEGORY_CONFIG, CATEGORY_COUNT, BLOG_CATEGORIES} from '../util/CategoryUtil'
import {useRouter} from 'vue-router'
import {ROUTER_BLOG_PANEL} from "../router/router_names.js";

const carousels = [
  {'style': "background-color: #0b3289;height:100%;", "content": "#0b3289"},
  {'style': "background-color: #e3f9fd;height:100%;", "content": "#e3f9fd"},
  {'style': "background-color: #ff8a00;height:100%;", "content": "#ff8a00"},
  {'style': "background-color: #f3f3f3;height:100%;", "content": "#f3f3f3"},
  {'style': "background-color: #008c8d;height:100%;", "content": "#008c8d"},
  {'style': "background-color: #f3f9f1;height:100%;", "content": "#f3f9f1"},
  {'style': "background-color: #2b825f;height:100%;", "content": "#2b825f"},

  {'style': "background-color: #2b825f;height:100%;", "content": "#2b825f"},

  {'style': "background-color: #b05b24;height:100%;", "content": "#b05b24"},
  {'style': "background-color: #f2ecde;height:100%;", "content": "#f2ecde"},
  {'style': "background-color: #81cac4;height:100%;", "content": "#81cac4"},
  {'style': "background-color: #e9f1f6;height:100%;", "content": "#e9f1f6"},
  {'style': "background-color: #4a010a;height:100%;", "content": "#4a010a"},
  {'style': "background-color: #fcefe8;height:100%;", "content": "#fcefe8"},

]




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
    <el-carousel-item v-for="item in carousels" :key="item">
      <div class="grid-content ep-bg-purple" :style="item.style">
        <!--        color:indianred;-->
        <span style="font-size: 3.2rem;display:block;text-align: center;line-height:360%"
              class="carousel-content">{{ item.content }}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
  <!-- java 相关分类 -->
  <div v-for="v in BLOG_CATEGORIES">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content ep-bg-purple" style="background-color: #1c6098;">
          <span style="font-size: 0.8rem;display:block;text-align: center;line-height:360%" class="p1">{{ v.category }}</span>
        </div>
      </el-col>
    </el-row>
    <div v-for="i in v.sub_categories.length">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content ep-bg-purple">
            <span style="font-size: 0.8rem;display:block;text-align: center;line-height:360%" class="p1">{{v.sub_categories[i]}}</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="grid-content ep-bg-purple">
            <span style="font-size: 0.8rem;display:block;text-align: center;line-height:360%" class="p1">{{v.sub_categories[i+1]}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.grid-content {
  min-height: 36px;
}

.carousel-content {
  color: #fff;
  text-shadow: 0 0 10px #0ebeff,
  0 0 20px #0ebeff,
  0 0 50px #0ebeff,
  0 0 100px #0ebeff,
  0 0 200px #0ebeff
}

.p1 {
  color: #fff;
  transition: .2s;
  &:hover {
    text-shadow: 0 0 10px #0ebeff,
    0 0 20px #0ebeff,
    0 0 50px #0ebeff,
    0 0 100px #0ebeff,
    0 0 200px #0ebeff;
  }
}

</style>
