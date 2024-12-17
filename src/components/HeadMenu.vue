<template>
  <a-flex gap="middle" align="center" vertical>
    <a-flex gap="middle" align="center">
<!--      <a-avatar src="/logo.jpg" alt="hi~" style="margin-right: 100px" />-->
      <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="handlerClick"
          :style="activeTheme"
          style="font-weight:bold"
      />
    </a-flex>
  </a-flex>
</template>
<script lang="ts" setup>
import {h, ref} from 'vue';
import {SearchOutlined, ReadOutlined, SmileOutlined, BugOutlined} from '@ant-design/icons-vue';
import {MenuProps} from 'ant-design-vue';
import {useRouter} from "vue-router";
import {activeTheme} from '../style/Themes.js'
const router = useRouter();
const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(SearchOutlined),
    // label: h('a', {index: '/'}, 'Search'),
    label: 'Search',
    title: 'Search',
  },
  {
    key: '/posts',
    icon: () => h(ReadOutlined),
    // label: h('a', {index: '/posts'}, 'Posts'),
    label: 'Posts',
    title: 'Posts'
  },
  {
    key: '/about',
    icon: () => h(SmileOutlined),
    // label: h('a', {index: '/about'}, 'Message Me'),
    label: 'Message Me',
    title: 'Message Me',
  },
  {
    key: '/demopage',
    icon: () => h(BugOutlined),
    label: 'Demo',
    title: 'Demo',
  },
]);
const handlerClick = ({item, key, keyPath}) => {
  console.log('>>>>>>>>>>>>>>head menu:',key)
  if (key === '0') {
    router.push({path: '/notfound'})
    return;
  }else {
    router.push({path: key})
  }
}
</script>
<style scoped>
.search {
  margin-left: 50%;
  height: 100%;
}
</style>/



