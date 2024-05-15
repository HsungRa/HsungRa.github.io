<script setup>
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router'
import matter from 'gray-matter'

import axios from 'axios';
import MDRender from '../components/MDRender.vue'
import Comment from '../components/Comment.vue'


const markdownContent = ref('');
const mdHeader = ref({})
const {currentRoute} = useRouter();
const route = currentRoute.value;

const category = route.params.category
const name = route.params.name
onMounted(async () => {
  axios.get(`/posts/${name}.md`).then((res) => {
    if (res.headers["content-type"] === "text/markdown") {
      const {content, data} = matter(res.data)
      mdHeader.value = data
      markdownContent.value = content
    }
  });
})
</script>
<template>
  <div class="page-container">
    <el-card style="width: 100%">
      <h1 class="title">{{ mdHeader.title }}</h1>
      <div class="meta">
        <div class="line">
          <div><strong>category: </strong> {{ mdHeader.category }}</div>
          <div><strong>date: </strong> {{ mdHeader.date }}</div>
          <div><strong>description: </strong> {{ mdHeader.description }}</div>
          <div>
            <strong>tags: </strong>
            <el-tag size="small" v-for="tag in mdHeader.tags" :key="tag">{{ tag }}</el-tag>
          </div>
        </div>
      </div>
      <div class="content">
        <MDRender :markdown="markdownContent"></MDRender>
      </div>
    </el-card>
    <Comment :blog="name"></Comment>
  </div>
  <el-backtop :right="18" :bottom="100"/>

  <!--  todo 提取左右侧信息 目录树等等-->
</template>

<style scoped>
.page-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  position: relative;
}

.line {
  padding-left: 20px;
  position: relative;
}

.line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #23e066;
}

.line > div {
  margin-bottom: 5px;
}

.content {
  font-size: 16px;
}
</style>
