<template>
  <div class="toc-container">
    <div class="toc-title">目录</div>
    <div class="toc-tree">
      <div v-for="(item, index) in tocItems" :key="index"
           :class="['toc-item', `level-${item.level}`]"
           @click="scrollToHeader(item.id)">
        <h4 v-if="item.level === 1">{{ item.text }}</h4>
        <h5 v-else-if="item.level === 2">{{ item.text }}</h5>
        <h6 v-else-if="item.level === 3">{{ item.text }}</h6>
        <p v-else>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tocItems: {
    type: Array,
    default: () => []
  }
});

const scrollToHeader = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.toc-container {
  padding: 10px;
}

.toc-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.toc-item {
  cursor: pointer;
  margin: 5px 0;
  color: #666;
}

.toc-item:hover {
  color: #23e066;
}

.level-1 {
  padding-left: 0;
}

.level-2 {
  padding-left: 15px;
  font-size: 0.95em;
}

.level-3 {
  padding-left: 30px;
  font-size: 0.9em;
}
</style>
