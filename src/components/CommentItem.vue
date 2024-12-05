<script>

export default {
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
    <a-comment>
      <template #actions>
        <span key="comment-nested-reply-to" @click="reply(item)">Reply to</span>
      </template>
      <template #author>
        <a>{{item.user_name}} {{ item.comment_at }}</a>
      </template>
      <template #avatar>
        <a-avatar :src="item.user_avatar" :alt="item.user_name" />
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
    <a-comment>
      <template #actions>
        <span key="comment-nested-reply-to" @click="reply(item)">Reply to</span>
      </template>
      <template #author>
        <a>{{item.user_name}} {{ item.comment_at }}</a>
      </template>
      <template #avatar>
        <a-avatar :src="item.user_avatar" :alt="item.user_name" />
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
