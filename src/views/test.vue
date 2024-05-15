<script setup>
import {h, onMounted, ref} from 'vue'
import markdownit from 'markdown-it'
import markdown_it_anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import string from "string"
import MDLinkTree from '../components/MDLinkTree.vue'

const linkTree = ref(h('p'))
const markdownDom = ref('')

onMounted(async () => {
  const src = `
# 1 一级
> 一级标题
## 1.1 二级
> 二级标题
### 1.1.1 三级
> 三级标题
## 1.2 二级1.2
> 二级标题
# 1 一级-2
> 一级标题-2
## 1.1 二级-2
> 二级标题-2
### 1.1.1 三级-2
> 三级标题-2
### 1.1.2 三级-2
> 三级标题-2
## 1.2 二级1.2-2
> 二级标题-2
`
  const md = markdownit();
  md.use(markdown_it_anchor);
  md.use(toc, {
    slugify: (s) => {
      return string(s).slugify().toString();
    },
    containerClass: 'toc',//生成的容器的类名，这样最后返回来的字符串是 <nav class="toc"><nav/>
    containerId: 'toc',//生成的容器的ID，这样最后返回来的字符串是 <nav id="toc"><nav/>
    listType: 'ul',//导航列表使用ul还是ol
    listClass: 'md-li',//li标签的样式名
    linkClass: 'md-a',//a标签的样式名
    callback: function (html, ast) {
      let nodes = ast.c
      let links = []
      for (let i = 0; i < nodes.length; i++) {
        links.push(buildTree(nodes[i]))
      }
      linkTree.value = h(
          'el-anchor',
          {
            type: "underline",
            offset: 70,
            onChange: (newOffset) => {
              offset.value = newOffset;
            }
          },
          links
      );
    }
  });

  const buildTree = (node) => {
    let level = node.l
    let name = node.n
    let child_nodes = node.c
    let sub_links = []
    if (child_nodes.length > 0) {
      for (let child of child_nodes) {
        sub_links.push(buildTree(child))
      }
      //       <template #sub-link>
    }
    if (child_nodes.length > 0) {
      return h(
          'el-anchor-link',
          {href: `#${name}`, textContent: `#${name}`},
          h('template', {slot: 'sub-link'}, sub_links)
      )
    } else {
      return h(
          'el-anchor-link',
          {href: `#${name}`, textContent: `#${name}`}
      )
    }

  }
  markdownDom.value = md.render(src)
})
</script>
<template>
  <div v-html="markdownDom"></div>
  <MDLinkTree :linkInfo="linkTree"></MDLinkTree>
</template>
<style scoped>

</style>
