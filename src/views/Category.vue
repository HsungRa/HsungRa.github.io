<script setup>
import {useRouter} from 'vue-router'
import {CATEGORY_CONFIG} from '../util/CategoryUtil'


const router = useRouter();
const categoryId = router.currentRoute.value.params.pid
const subCategoryId = router.currentRoute.value.params.subid

</script>


<template>

</template>

<style scoped>

</style>

