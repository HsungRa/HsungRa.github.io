<template>
  <article-toc v-if="rightAsideConfig.type===0" :toc_list="rightAsideConfig.value"/>
</template>

<script lang="js">
import {defineComponent,provide, reactive} from 'vue'
import ArticleToc from "./ArticleToc.vue";

export default defineComponent({
  name: "RightAside",
  components: {ArticleToc},
  inject: ["rightAsideConfig"],
  created() {
    console.log(this.rightAsideConfig)
  }
})
</script>

<style scoped>

</style>
