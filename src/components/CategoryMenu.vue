<template>
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
</template>

<script setup>
import CategoryMenuItem from './CategoryMenuItem.vue';
import {onMounted} from "vue";
import {Events, publishEvent} from "../util/bus.js";

const props = defineProps({
  categories: {
    required: true,
  },
});

const handleSelect = (key, keyPath) => {
  const articles = loadPosts(key);
  publishEvent(Events.LOAD_ARTICLE_SUMMARY_LIST, articles);

}

const loadPosts = (path) => {
  if (!props.categories[0]) {
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
  const directory = findDirectory(props.categories[0], path);
  if (!directory) {
    return []
  }

  return directory.posts.map(md => {
    md.name = md.name.replace('.md', '')
    return md
  });
}

onMounted(() => {
  const articles = loadPosts(props.categories[0].filePath);
  publishEvent(Events.LOAD_ARTICLE_SUMMARY_LIST, articles);
})
</script>

<style scoped>
.category-menu {
  height: 100%;
}
</style>
