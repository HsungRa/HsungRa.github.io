<script setup>
import {inject, nextTick, onMounted, ref} from 'vue';
import {useRouter} from 'vue-router'
import Comment from '../components/Comment.vue'
import {getArticleDetail} from "../service/ArticleService.js";
import "github-markdown-css/github-markdown.css"
import "highlight.js/styles/atom-one-light.css"

const {currentRoute} = useRouter();
const route = currentRoute.value;
const rightAsideConfig = inject("rightAsideConfig");
const articleCode = route.params.articleCode;
const markdownContent = ref('');
const mdHeader = ref({})
const commentNumber = ref('')

// ========================================================================================================
const mdRef = ref(null)
const toc = ref([])
const contentRef = ref(null)
const directoryRef = ref(null)
let directoryId = ref('')

//初始化目录树
const directoryInit = (toc_list) => {
  if (!toc_list.length) {
    toc.value = [];
    return;
  }
  const hTags = Array.from(new Set(toc_list.map((t) => t.name))).sort();
  toc.value = toc_list.map((el) => ({
    id: 'directory-' + el.id,
    title: el.innerText,
    lineIndex: el.id,
    indent: hTags.indexOf(el.tagName)
  }));
}
//目录点击事件
const directoryClick = (anchor) => {
  const {lineIndex} = anchor;
  const heading = mdRef.value.$el.querySelector(`[data-v-md-heading="${lineIndex}"]`);
  if (heading) {
    removeScrollEventListener()
    directoryId.value = anchor.id
    mdRef.value.scrollToTarget({
      target: heading,
      scrollContainer: document.querySelector(".main-container"),
      top: 60,
    });
    setTimeout(() => {
      addScrollEventListener()
    }, 200);
  }
}
//滚动事件监听
const scrollEventListener = () => {
  let pixel = contentRef.value.$el.scrollTop + contentRef.value.$el.offsetTop + 1
  const title = toc.value.reduce((prev, curr) => {
    if (curr.pixel <= pixel && (prev === null || pixel - curr.pixel < pixel - prev.pixel)) {
      return curr;
    }
    return prev;
  }, null);
  if (title) {
    directoryRef.value.scrollTop = (directoryRef.value.scrollHeight * title.pixel) / contentRef.value.$el.scrollHeight
    directoryId.value = title.id
  }
}
//注册滚动事件
const addScrollEventListener = () => {
  contentRef.value.$el.addEventListener('scroll', scrollEventListener);
}
//销毁滚动事件
const removeScrollEventListener = () => {
  contentRef.value.$el.removeEventListener('scroll', scrollEventListener);
}
// ========================================================================================================
onMounted( () => {
  getArticleDetail(articleCode).then(res => {
    const article = res.data
    mdHeader.value = {
      title: article.title,
      category_code: article.category_code,
      category: article.category_name,
      date: article.time,
      readings: article.readings,
      tags: []
    }
    commentNumber.value = article.comment_number
    rightAsideConfig.value = article.article_toc
    markdownContent.value = article.content
    directoryInit(article.article_toc);
  })
});
nextTick(() => {
  // addScrollEventListener();
});
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
            <div><strong>readings: </strong> {{ mdHeader.readings }}</div>
            <div>
              <strong>tags: </strong>
              <el-tag size="small" v-for="tag in mdHeader.tags" :key="tag">{{ tag }}</el-tag>
            </div>
          </div>
        </div>
        <div class="content" ref="contentRef">
          <v-md-preview :text="markdownContent" ref="mdRef"></v-md-preview>
        </div>
      </el-main>
      <el-aside class="el-aside-right">
        <div ref="directoryRef" style="height: 100%">
          <div v-for="anchor in toc" :key="anchor" :style="{ padding: `5px 0 5px ${anchor.indent * 20}px`,color: directoryId === anchor.id ? '#409eff' : 'black' }" @click="directoryClick(anchor)" class="directory-item" :id="anchor.id"  style="height: 100%">
            {{ anchor.title }}
          </div>
        </div>
      </el-aside>
    </el-container>
    <el-footer>
      <Comment :commentNumber="commentNumber" :articleCode="articleCode"></Comment>
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
  color:white;
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
