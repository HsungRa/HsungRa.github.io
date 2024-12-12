<template>
  <a-space>
    <a-button type="primary" @click="testReadMarkdownFile">testReadMarkdownFile</a-button>
    <a-button type="primary" @click="testReadLocalMarkdownFile">testReadLocalMarkdownFile</a-button>
    <a-button type="primary" @click="testGetDirectoryTree">testGetDirectoryTree</a-button>
    <a-button type="primary" @click="testGetLocalDirectoryTree">testGetLocalDirectoryTree</a-button>
  </a-space>
</template>
<script lang="ts" setup>
import {TestPostService} from '../service/TestPostService.js'
import {ref} from "vue";

const treeCache =ref(null)

const testReadMarkdownFile = () => {
  TestPostService.readMarkdownFile('HsungRa', 'HsungRa.github.io', 'public/posts/demo.md', 'gh-pages').then(res => {
    console.log(">>>>>>>>>>>>>>>>>>>>>readMarkdownFile", res)
  })
}

const testReadLocalMarkdownFile = () => {
  TestPostService.readLocalMarkdownFile('posts/demo.md').then(res => {
    console.log(">>>>>>>>>>>>>>>>>>>>>readMarkdownFile", res)
  })
}

const testGetDirectoryTree = () => {
  TestPostService.getDirectoryTree('HsungRa', 'HsungRa.github.io', 'public/posts', 'gh-pages').then(res => {
    console.log(">>>>>>>>>>>>>>>>>>>>>getDirectoryTree", res)
  })
}

const testGetLocalDirectoryTree = () => {
  TestPostService.getLocalDirectoryTree('posts').then(res => {
    console.log(">>>>>>>>>>>>>>>>>>>>>getDirectoryTree", res)
    treeCache.value = res

    const res1=getPosts2('posts/java/spring');
    console.log(">>>>>>>>>>>>>>>>>>>>>getPosts posts/java/spring", res1)


    const res2=getPosts2('posts/machine learning');
    console.log(">>>>>>>>>>>>>>>>>>>>>getPosts posts/machine learning", res2)
  })


}

const getPosts2= (path)=>{
  try {
    // 如果目录树缓存不存在，先获取完整的目录树
    if (!treeCache.value) {
      return
    }

    // 递归查找指定路径的目录
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

    // 在缓存的目录树中查找指定目录
    const directory = findDirectory(treeCache.value, path);
    if (!directory) {
      return []
    }
    return directory.posts;
  } catch (error) {
    console.error('获取文件列表失败:', error);
    throw new Error(`无法获取目录 ${path} 下的文件`);
  }
}

</script>
