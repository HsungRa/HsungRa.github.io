<script>
import {defineComponent} from "vue";
import 'gitment/style/default.css'
import Gitment from 'gitment'

var gitment = new Gitment({
  // id: '页面 ID', // 可选。默认为 location.href
  owner: 'HsungRa',
  repo: 'blog_comments',
  oauth: {
    client_id: 'Ov23lihyYbMQUE2nL7Vv',
    client_secret: 'ba712f3f0387bfd108c781bdab7259bf58234f7d',
  },
})
gitment.render('container')

export default defineComponent({
  name: "Comment",
  props: {
    blog: {
      type: String,
      required: true
    }
  },
})
</script>

<template>
  <div id="container"></div>
</template>
<style scoped>
</style>
