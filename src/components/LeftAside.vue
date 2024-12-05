<template>
  <category-menu/>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import CategoryMenu from "./CategoryMenu.vue";

export default defineComponent({
  name: "LeftAside",
  components: {CategoryMenu},
})
</script>

<style scoped>

</style>
