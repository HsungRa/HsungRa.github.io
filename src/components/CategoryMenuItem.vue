<template>
  <template v-if="item.sub_categories && item.sub_categories.length > 0">
    <!-- 父级分类 -->
    <el-sub-menu :index="item.code">
      <template #title>
        <span>{{ item.category_name }}</span>
      </template>
      <template v-for="subItem in item.sub_categories" :key="subItem.code">
        <category-menu-item :item="subItem" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <!-- 子分类 :index="`/${ROUTER_BLOG_PANEL}/${item.code}`"-->
    <el-menu-item :index="item.code">
      {{ item.category_name }}
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
