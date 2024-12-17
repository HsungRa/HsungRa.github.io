<template>
  <template v-if="item.children && item.children.length > 0">
    <!-- 父级分类 -->
    <el-sub-menu :index="item.filePath">
      <template #title>
        <span style="font-size:18px;">{{ item.name }}</span>
      </template>
      <template v-for="subItem in item.children" :key="subItem.filePath">
        <category-menu-item :item="subItem" />
      </template>
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="item.filePath">
      <span style="font-size:18px;">{{ item.name }}</span>
    </el-menu-item>
  </template>
</template>

<script>

export default {
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
