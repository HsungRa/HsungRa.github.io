<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
</template>
<script lang="ts" setup>
import {h, onMounted, ref} from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'search',
    icon: () => h(MailOutlined),
    label: h('a', {href: '/'}, 'Search'),
    title: 'Search',
  },
  {
    key: 'posts',
    icon: () => h(AppstoreOutlined),
    label: h('a', {href: '/posts'}, 'Posts'),
    title: 'Posts'
  },
  {
    key: 'about me',
    label: h('a', {href: '/about'}, 'about me'),
    title: 'about me',
  },
  {
    key: 'demo',
    label: h('a', {href: '/demo'}, 'demo'),
    title: 'demo',
  },
]);

// onMounted(()=>{
//   getCategoryList().then((data) => {
//     const categories = data.data
//
//   })
// })
</script>
