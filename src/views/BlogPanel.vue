<script setup>
import {useRouter} from 'vue-router'
import {CATEGORY_CONFIG} from '../util/CategoryUtil'


const router = useRouter();
const category = router.currentRoute.value.params.category
const categoryBlogs = CATEGORY_CONFIG[category]["blogs"]

const openBlog = (name) => {
  router.push({path: `/blog/${category}/${name}`})
}

</script>

<template>
  <el-space wrap>
    <el-card v-for="blog of categoryBlogs" :key="blog" class="box-card" style="width: 250px" shadow="hover">
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
