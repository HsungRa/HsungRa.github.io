<template>
  <v-md-preview :text="markdown"></v-md-preview>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import "github-markdown-css/github-markdown.css"
import "highlight.js/styles/atom-one-light.css"



export default defineComponent({
  name: "MDRender",
  props: {
    markdown: {
      type: String,
      required: true
    }
  },
})

</script>
<style scoped>

</style>
