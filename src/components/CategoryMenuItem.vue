<template>
  <template v-if="item.children && item.children.length > 0">
    <!-- 父级分类 -->
    <el-sub-menu :index="item.filePath">
      <template #title>
        <h3>{{ item.name }}</h3>
      </template>
      <template v-for="subItem in item.children" :key="subItem.filePath">
        <category-menu-item :item="subItem" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="item.filePath">
      <h3>{{ item.name }}</h3>
    </el-menu-item>
  </template>
</template>

<script>
import {ROUTER_BLOG_PANEL} from "../router/router_names.js";

export default {
  data() {
    return {
      ROUTER_BLOG_PANEL: ROUTER_BLOG_PANEL
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
