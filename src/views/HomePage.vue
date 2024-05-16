<script setup>
import {CATEGORY_CONFIG} from '../util/CategoryUtil'

const buildHerf = (category) => {
  return "/panel/" + category
}
</script>

<template>
  <el-space direction="vertical" style="width: 100%" fill fill-ratio="80">
    <VaCard
        stripe
        stripe-color="success"
        v-for="(category, index) of CATEGORY_CONFIG"
        :key="index"
        gradient
        :href=buildHerf(index)
        >
      <VaCardTitle>{{ index }}</VaCardTitle>
      <VaCardContent>
        {{ category.desc }}.
      </VaCardContent>
    </VaCard>
  </el-space>
</template>

<style scoped>

</style>
