<template>
<!--  background-color="#2f323c"-->
<!--  text-color="#e4e8ec"-->
  <el-menu
      :default-active="$route.path"
      class="article-toc"
      @select="handleSelect"
      active-text-color="#f68b5d"
  >
    <template v-for="toc in toc_list" :key="toc.id">
      <article-toc-item :item="toc"/>
    </template>
  </el-menu>
</template>

<script>
import ArticleTocItem from './ArticleTocItem.vue';
export default {
  name: "ArticleToc",
  components: {ArticleTocItem},
  props: {
    toc_list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      categories: [], // 分类数据
      activeMenu: '', // 当前选中的菜单项
    };
  },
  created() {
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('Selected key:', key);
      console.log('Selected keyPath:', keyPath);

      // console.log(this.$refs);
      // const { preview } = this.$refs;
      // const { lineIndex } = key;
      //
      // const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);
      //
      // if (heading) {
      //   // 注意：如果你使用的是编辑组件的预览模式,则这里的方法名改为 previewScrollToTarget
      //   preview.scrollToTarget({
      //     target: heading,
      //     scrollContainer: window,
      //     top: 60,
      //   });
      // }
    },
  },
  mounted() {
  }
};
</script>
<style scoped>
.article-toc {
  height: 100%;
}
</style>
