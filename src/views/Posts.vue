<script setup>
import CategoryMenu from "../components/CategoryMenu.vue";

import {useRouter} from 'vue-router'
import {onMounted, ref, watch} from "vue";
import {getArticleList} from "../service/ArticleService.js";
import {getCategoryList} from "../service/CategoryService.js";
import CategoryMenuItem from "../components/CategoryMenuItem.vue";
const router = useRouter();
const categories = ref([])
const articles = ref([])

const loadPosts = (categoryCode) => {
  getArticleList(categoryCode).then(res => {
    articles.value = res.data
  });
}

onMounted(() => {
  getCategoryList().then((data) => {
    categories.value = data.data
    if (categories.value.length > 0) {
      loadPosts(categories.value[0].code)
    }
  })
})

const gotoArticle = (articleCode) => {
  router.push({path: `/blog/${articleCode}`})
}

const handleSelect=(key, keyPath)=>{
  console.log('Selected category code:', key, keyPath);
  loadPosts(key);
}

</script>

<template>
  <el-aside class="el-aside-left" >
    <el-menu
        :default-active="$route.path"
        class="category-menu"
        @select="handleSelect"
        active-text-color="#f68b5d"
    >
      <template v-for="category in categories" :key="category.code">
        <category-menu-item :item="category"/>
      </template>
    </el-menu>
  </el-aside>
  <el-main>
    <div class="va-table-responsive">
      <table class="va-table va-table--clickable" style="width:100%;">
        <tbody>
        <tr
            v-for="article in articles"
            :key="article.code"
            @click="gotoArticle(article.code)"
        >
          <td>{{ article.title }}</td>
          <td>{{ article.tags }}</td>
          <td>{{ article.time }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </el-main>
</template>

<style scoped>
.el-main {
  //background-color: #2f323c;
  width: 88%;
  position: absolute;
  left: 12%;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.el-aside-left {
  //background-color: #2f323c;
  width: 12%;
  display: block;
  position: absolute;
  margin-left: 0;
  top: 60px;
  bottom: 0;
}
</style>
