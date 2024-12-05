<template>
<!--        background-color="#2f323c"
      text-color="#e4e8ec"-->
  <el-menu
      :default-active="$route.path"
      class="category-menu"
      @select="handleSelect"
      active-text-color="#f68b5d"
      :router="true"
  >
    <template v-for="category in categories" :key="category.code">
      <category-menu-item :item="category"/>
    </template>
  </el-menu>
</template>

<script>
import CategoryMenuItem from './CategoryMenuItem.vue';
import {getCategoryList} from "../service/CategoryService.js";

export default {
  // inject:['reload'],
  components: {CategoryMenuItem},
  props: {
    // categories: {
    //   type: Array,
    //   required: true,
    // },
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
    fetchCategories() {
      getCategoryList().then((data) => {
        this.categories = data.data
      })
    },
    handleSelect(key, keyPath) {
      console.log('Selected category code:', key, keyPath);
      // this.$router.push({name: ROUTER_BLOG_PANEL, params: {categoryCode: key}});
      // this.activeMenu = key;
      // this.reload()
    },
  },
  mounted() {
    this.fetchCategories();
  }
};
</script>
<style scoped>
.category-menu {
  height: 100%;
}
</style>
