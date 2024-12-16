<script setup>
import {useRouter} from 'vue-router'
import {inject, onBeforeUnmount, onMounted, ref} from "vue";
import {PostService} from '../service/PostService.js'
import {Types} from "../util/LeftAsideType.js";
import {Events, subscribeEvent, unsubscribeEvent} from '../util/bus.js';

const router = useRouter();
const categories = ref([])
const globalConfig = inject("globalConfig");
const articles = ref([])

const loadCategories = () => {
  PostService.getLocalDirectoryTree().then(res => {
    categories.value = res.children
    if (categories.value.length > 0) {
      globalConfig.leftAsideConfig.show = true;
      globalConfig.leftAsideConfig.type = Types.POSTS_CATEGORY_MENU;
      globalConfig.leftAsideConfig.args = categories.value;
    }
  })
}

const gotoArticle = (articleFilePath) => {
  router.push({path: `/blog/${articleFilePath.replace('.md','').replace(/\//g, "-")}`})
}

onMounted(() => {
  loadCategories();
  subscribeEvent(Events.LOAD_ARTICLE_SUMMARY_LIST, (eventData) => {
    articles.value = eventData;
  });
})

onBeforeUnmount(()=>{
  unsubscribeEvent(Events.LOAD_ARTICLE_SUMMARY_LIST)
})

</script>

<template>
  <div class="article-list-container">
    <div class="article-list">
      <div v-for="article in articles"
           :key="article.filePath"
           class="article-item"
           @click="gotoArticle(article.filePath)">
        <div class="article-title">{{ article.name }}</div>
        <div class="article-meta">
          <span class="date">{{ article.lastModified }}</span>
<!--          <div class="tags">-->
<!--            <el-tag v-for="tag in article.tags"-->
<!--                    :key="tag"-->
<!--                    size="small"-->
<!--                    effect="plain">-->
<!--              {{ tag }}-->
<!--            </el-tag>-->
<!--          </div>-->
        </div>
        <div class="article-summary">{{ article.summary }}</div>
<!--        <div class="article-footer">-->
<!--          <span class="reading-time">预计阅读时间: {{ article.readingTime }}分钟</span>-->
<!--          <span class="views">阅读量: {{ article.views }}</span>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-list-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.category-header {
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #23e066;
}

.category-header h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

.category-meta {
  color: #666;
  font-size: 14px;
}

.article-item {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.article-item:hover {
  transform: translateY(-3px);
}

.article-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.article-meta {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
}

.date {
  color: #666;
  margin-right: 15px;
}

.tags {
  display: flex;
  gap: 8px;
}

.article-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 12px;
}

.reading-time, .views {
  display: flex;
  align-items: center;
}
</style>
