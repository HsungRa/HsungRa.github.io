<script setup>
import "github-markdown-css/github-markdown.css"
import "highlight.js/styles/atom-one-light.css"


import {inject, nextTick, onMounted, ref} from 'vue';
import Comment from '../components/Comment.vue'
import {articleStore} from '../service/ArticleService.js'
import {parseMarkdownFile} from "../service/MarkdownService.js";
import ArticleToc from "../components/ArticleToc.vue";


const rightAsideConfig = inject("rightAsideConfig");
const currentArticle = articleStore.currentArticle;
const markdownContent = ref('');
const mdHeader = ref({})
const commentNumber = ref('')
const mdRef = ref(null)
const tocItems = ref([]);

// ========================================================================================================
onMounted(() => {
  parseMarkdownFile(currentArticle.filePath).then(res=>{
    markdownContent.value = res.content
    commentNumber.value = res.commentNumber
    mdHeader.value = {
      title: res.title,
      date: res.date,
      category: res.category,
      readings: 0, //todo
      tags: res.tags,
    }
    // 等待markdown渲染完成后生成目录
    nextTick(() => {
      generateToc();
    });
  });
});
// 解析标题生成目录树
const generateToc = () => {
  const content = mdRef.value.$el;
  const headers = content.querySelectorAll('h1, h2, h3');
  const items = [];

  headers.forEach((header, index) => {
    // 为每个标题添加id
    const id = `header-${index}`;
    header.id = id;

    items.push({
      id,
      level: parseInt(header.tagName.charAt(1)),
      text: header.textContent
    });
  });

  tocItems.value = items;
};


</script>

<template>
  <el-container class="page-container">
    <el-container>
      <el-main>
        <h1 class="title">{{ mdHeader.title }}</h1>
        <div class="meta">
          <div class="line">
            <div><strong>category: </strong> {{ mdHeader.category }}</div>
            <div><strong>date: </strong> {{ mdHeader.date }}</div>
            <div>
              <strong>tags: </strong>
              <el-tag size="small" v-for="tag in mdHeader.tags" :key="tag">{{ tag }}</el-tag>
            </div>
          </div>
        </div>
        <div class="content">
          <v-md-preview :text="markdownContent" ref="mdRef"></v-md-preview>
        </div>
      </el-main>
      <el-aside class="el-aside-right">
        <ArticleToc :tocItems="tocItems"/>
      </el-aside>
    </el-container>
    <el-footer>
      <Comment :commentNumber="commentNumber" v-if="commentNumber !== null && commentNumber!==undefined"></Comment>
    </el-footer>
  </el-container>
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
  width: 100%;
}

.meta {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  position: relative;
  width: 88%;
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
  width: 100%;
}

.el-aside-right {
  //background-color: #2f323c;
  color: white;
  width: 12%;
  display: block;
  position: absolute;
  right: 0;
  top: 60px;
  bottom: 0;
  margin-left: 88%;
  height: 100%;
}
</style>
