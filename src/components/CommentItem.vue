<script>

import {activeTheme} from "../style/Themes.js";

export default {
  computed: {
    activeTheme() {
      return activeTheme
    }
  },
  data() {
    return {
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods:{
    reply(item){
      this.$emit('reply',item);
    },
    nestedReply(item){
      this.$emit('reply',item);
    },
  }
}
</script>
<template>
  <template v-if="item.children && item.children.length > 0">
    <a-comment :style="{color:activeTheme.color}">
      <template #actions>
        <span :style="{color:activeTheme.color}" key="comment-nested-reply-to" @click="reply(item)">Reply to</span>
      </template>
      <template #author>
        <a :style="{color:activeTheme.color}">{{item.userName}} {{ item.commentAt }}</a>
      </template>
      <template #avatar>
        <a-avatar :src="item.userAvatar" :alt="item.userName" />
      </template>
      <template #content>
        <p>
          {{item.content}}
        </p>
      </template>
      <template v-for="reply in item.children" :key="reply.id">
        <comment-item :item="reply" @reply="nestedReply" />
      </template>
    </a-comment>
  </template>
  <template v-else>
    <a-comment :style="{color:activeTheme.color}">
      <template #actions>
        <span :style="{color:activeTheme.color}" key="comment-nested-reply-to" @click="reply(item)">Reply to</span>
      </template>
      <template #author>
        <a :style="{color:activeTheme.color}">{{item.userName}} {{ item.commentAt }}</a>
      </template>
      <template #avatar>
        <a-avatar :src="item.userAvatar" :alt="item.userName" />
      </template>
      <template #content>
        <p>
          {{item.content}}
        </p>
      </template>
    </a-comment>
  </template>
</template>

<style scoped>

</style>
