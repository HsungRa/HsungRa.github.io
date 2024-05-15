<!--<template>-->
<!--&lt;!&ndash;  <component v-if="linkDom" :is ="linkDom"></component>&ndash;&gt;-->
<!--</template>-->

<script lang="js">
import {defineComponent, ref, render, watch} from 'vue'

// const linkDom = ref(null)
export default defineComponent({
  name: "MDLinkTree",
  props: {
    linkInfo: {
      required: true
    }
  },
  setup(props) {
    const linkDom = ref(null)
    watch(() => props.linkInfo, (newLinkInfo) => {
      linkDom.value = newLinkInfo
    })
    return {
      linkDom
    }
  },
  render(){
    return this.linkDom
  }
})

</script>
<style scoped>

</style>
