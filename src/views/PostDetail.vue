<script setup>
import "github-markdown-css/github-markdown.css"
import "highlight.js/styles/atom-one-light.css"
import {inject, nextTick, onMounted, ref} from 'vue';
import {useRouter} from "vue-router";
import Comment from '../components/Comment.vue'
import {parseMarkdownFile} from "../service/ArticleService.js";
import {Types} from "../util/LeftAsideType.js";
import {activeTheme} from '../style/Themes.js'
import {ElLoading} from "element-plus";

const globalConfig = inject("globalConfig");
const markdownContent = ref('');
const mdHeader = ref({})
const commentNumber = ref('')
const mdRef = ref(null)
const displaiable = ref(false)
const loadingInstance = ElLoading.service({
  lock:true,

})

onMounted(() => {
  const {currentRoute} = useRouter();
  const route = currentRoute.value;
  parseMarkdownFile(`${route.params.articleKey.replace(/-/g, "/")}.md`).then(res => {
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
      loadingInstance.close()
      displaiable.value = true
      generateToc();
    });
  })
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
  globalConfig.leftAsideConfig.show = true;
  globalConfig.leftAsideConfig.type = Types.ARTICLE_TOC;
  globalConfig.leftAsideConfig.args = items;
};

</script>
<template>
  <div v-if="displaiable" class="page-container" style="width:73%;float:left">
    <h1 class="title">{{ mdHeader.title }}</h1>
    <div class="meta">
      <div class="line">
        <div><strong>Category: </strong> {{ mdHeader.category }}</div>
        <div><strong>Date: </strong> {{ mdHeader.date }}</div>
        <div>
          <strong>Tags: </strong>
          <el-tag size="small" v-for="tag in mdHeader.tags" :key="tag">{{ tag }}</el-tag>
        </div>
      </div>
    </div>
    <div class="content">
      <v-md-preview :text="markdownContent" ref="mdRef"/>
    </div>
    <div style="clear:both;">
      <Comment :commentNumber="commentNumber" v-if="commentNumber !== null && commentNumber!==undefined"></Comment>
    </div>
  </div>
</template>

<style scoped>
.page-container {
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
  color: v-bind(activeTheme.color);
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
</style>
