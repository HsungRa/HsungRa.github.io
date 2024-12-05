<template>
  <template v-if="item.children && item.children.length > 0">
    <!-- 父级分类 -->
    <el-sub-menu :index="item.id">
      <template #title>
        <span>{{ item.name }}</span>
        <!--        <span><el-anchor-link :href="'#'+item.id" style="color:white">{{ item.name }}</a></span>-->
      </template>
      <template v-for="subItem in item.children" :key="subItem.id">
        <article-toc-item :item="subItem" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <!-- 子分类 -->
    <el-menu-item :index="item.id">
      <span>{{ item.name }}</span>
<!--      <span><el-anchor-link :href="'#'+item.id" style="color:white">{{ item.name }}</a></span>-->
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: "ArticleTocItem",
  data() {
    return {
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
