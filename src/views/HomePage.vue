<script setup>
import {CATEGORY_CONFIG} from '../util/CategoryUtil'
import {useRouter} from 'vue-router'
import {ROUTER_BLOG_PANEL} from "../router/router_names.js";

const router = useRouter();
// path: `/${ROUTER_BLOG_PANEL}/
const goto = (category) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>goto:"+category)
  return router.push(`/${ROUTER_BLOG_PANEL}/${category}`)
}
const buildHerf = (category) => {

  return "/panel/" + category
}
</script>
<!--        :href=buildHerf(index)
-->
<template>
  <el-space direction="vertical" style="width: 100%" fill fill-ratio="80">
    <VaCard stripe stripe-color="success" v-for="(category, index) of CATEGORY_CONFIG" :key="index" gradient>
      <VaCardTitle>
        <span @click="goto(index)">{{ index }}</span>
      </VaCardTitle>
      <VaCardContent>
        {{ category.desc }}.
      </VaCardContent>
    </VaCard>
  </el-space>
</template>

<style scoped>

</style>
