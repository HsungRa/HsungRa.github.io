<script setup>
import {useRouter} from 'vue-router'
import {onMounted} from "vue";
import {getArticleList} from "../../service/ArticleService.js";


const router = useRouter();
const category_code = router.currentRoute.value.params.category_code

const openBlog = (name) => {
  router.push({path: `/blog/${category}/${name}`})
}

let articles = []
onMounted(() => {
  getArticleList(category_code).then(res => {
    console.log(res)
    articles = res.data
  });
})
</script>

<template>
  <el-space wrap>
    <el-card v-for="blog of articles" :key="blog" class="box-card" style="width: 250px" shadow="hover">
      <template #header>
        <div class="card-header">
          <span @click="openBlog(blog.title)">{{ blog.title }}</span>
        </div>
      </template>
      <div class="text item">
        {{ blog.description }}
      </div>
    </el-card>
  </el-space>
</template>

<style scoped>

</style>
