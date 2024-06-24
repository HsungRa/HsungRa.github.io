<script setup>
import {CATEGORY_CONFIG, CATEGORY_COUNT} from '../util/CategoryUtil'
import {useRouter} from 'vue-router'
import {ROUTER_BLOG_PANEL} from "../router/router_names.js";

const category_map = {}
for (let i = 1; i <= CATEGORY_COUNT; i = i + 2) {
  if (i === CATEGORY_COUNT) {
    category_map[i] = [CATEGORY_CONFIG[i]]
  } else {
    category_map[i] = [CATEGORY_CONFIG[i], CATEGORY_CONFIG[i + 1]]
  }
}

const router = useRouter();
const goto = (category) => {
  return router.push(`/${ROUTER_BLOG_PANEL}/${category}`)
}

const buildHerf = (category) => {
  return "/panel/" + category
}

</script>
<template>
  <el-space direction="vertical" style="width: 100%" fill fill-ratio="80">
    <VaCard style="width: 100%">
      <VaCardBlock horizontal v-for="v in category_map">
        <VaCardBlock class="flex-nowrap" style="width: 50%">
          <VaCardContent @click="goto(v[0].category)"><a href="#">{{ v[0].category }}{{ v[0].desc }}</a>
          </VaCardContent>
        </VaCardBlock>
        <VaDivider vertical v-if="v.length>1"/>
        <VaCardBlock class="flex-auto" v-if="v.length>1" style="width: 50%">
          <VaCardContent @click="goto(v[1].category)"><a href="#">{{ v[1].category }}{{ v[1].desc }}</a>
          </VaCardContent>
        </VaCardBlock>
      </VaCardBlock>
    </VaCard>
  </el-space>
</template>

<style scoped>

</style>
