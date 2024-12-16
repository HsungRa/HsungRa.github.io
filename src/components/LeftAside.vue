<template>
  <category-menu v-if="leftType === Types.POSTS_CATEGORY_MENU" :categories="args"/>
  <article-toc v-else-if="leftType === Types.ARTICLE_TOC" :tocItems="args"/>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import CategoryMenu from "./CategoryMenu.vue";
import ArticleToc from "./ArticleToc.vue";
import {Types} from "../util/LeftAsideType.js";


export default defineComponent({
  name: "LeftAside",
  computed: {
    Types() {
      return Types
    }
  },
  components: {CategoryMenu, ArticleToc},
  props: {
    leftType: {
      required: true
    },
    args: {
      required: true
    },
  },

})
</script>

<style scoped>

</style>
