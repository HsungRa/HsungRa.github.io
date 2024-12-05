<script setup>
import {useRouter} from 'vue-router'
import {onMounted, ref, watch} from "vue";
import {getArticleList} from "../service/ArticleService.js";
const router = useRouter();
const categoryCode = ref(router.currentRoute.value.params.categoryCode)

let articles = ref([])

watch(() => router.currentRoute.value.params, (newParams) => {
  getArticleList(newParams.categoryCode).then(res => {
    articles.value = res.data
  });
});

onMounted(() => {
  getArticleList(categoryCode.value).then(res => {
    articles.value = res.data
  });
})

const gotoArticle = (articleCode) => {
  router.push({path: `/blog/${articleCode}`})
}

</script>

<template>
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
</template>
<style scoped>

</style>
