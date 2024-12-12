<script setup>
import {useRouter} from 'vue-router'
import {onMounted, ref} from "vue";
import {PostService} from '../service/PostService.js'
import {articleStore} from '../service/ArticleService.js'
import CategoryMenuItem from "../components/CategoryMenuItem.vue";

const router = useRouter();
const categories = ref([])
const articles = ref([])

const loadPosts = (path) => {
  try {
    if (!categories.value[0]) {
      return
    }
    const findDirectory = (tree, targetPath) => {
      if (tree.filePath === targetPath) {
        return tree;
      }
      for (const child of tree.children) {
        const found = findDirectory(child, targetPath);
        if (found) return found;
      }
      return null;
    };
    const directory = findDirectory(categories.value[0], path);
    if (!directory) {
      return []
    }
    /**
     * name: pathParts[pathParts.length - 1],
     *                     filePath: `posts/${relativePath}`,
     *                     lastModified: frontmatter.date || new Date().toISOString(), // 优先使用 frontmatter 中的日期
     *                     summary: this.generateSummary(fileContent)
     */
    return directory.posts.map(md => {
      md.name = md.name.replace('.md', '')
      return md
    });
  } catch (error) {
    console.error('获取文件列表失败:', error);
    throw new Error(`无法获取目录 ${path} 下的文件`);
  }
}

const loadCategories = () => {
  PostService.getLocalDirectoryTree().then(res => {
    console.log(res)
    categories.value.push(res)
    articles.value = loadPosts(res.filePath)
  })
}

const gotoArticle = (articlePath) => {
  articleStore.setCurrentArticle(articlePath)
  router.push({path: "/blog"})
}

const handleSelect=(key, keyPath)=>{
  articles.value=loadPosts(key);
}

onMounted(() => {
  loadCategories()
})

</script>

<template>
  <el-aside class="el-aside-left" >
    <el-menu
        :default-active="$route.path"
        class="category-menu"
        @select="handleSelect"
        active-text-color="#f68b5d"
    >
      <template v-for="category in categories" :key="category.filePath">
        <category-menu-item :item="category"/>
      </template>
    </el-menu>
  </el-aside>
  <el-main>
    <template v-for="article in articles">
      <el-card style="width: 70%" shadow="hover" @click="gotoArticle(article.filePath)">
        <h2>{{ article.name }}</h2>
        <p style="margin: 8px 0;color: #696c6c;font-size: 14px;font-family:Arial,sans-serif;line-height: 1.6;overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">{{ article.summary }}</p>
        <p style="color: #696c6c;font-size: 10px;font-family:Arial,sans-serif;">Date {{ article.lastModified }}</p>
      </el-card>
    </template>
<!--    <div class="va-table-responsive">-->
<!--      <table class="va-table va-table&#45;&#45;clickable" style="width:100%;">-->
<!--        <tbody>-->
<!--        <tr-->
<!--            v-for="article in articles"-->
<!--            @click="gotoArticle(article.filePath)"-->
<!--        >-->
<!--          <td>{{ article.name }}</td>-->
<!--          <td>{{ article.summary }}</td>-->
<!--          <td>{{ article.lastModified }}</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
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
