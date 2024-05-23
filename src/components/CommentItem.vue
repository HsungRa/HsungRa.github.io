<template>
  <br v-if="!comment.isReply">
  <VaCard square outlined>
    <VaCardContent>
      <VaListItem>
        <VaListItemSection avatar style="margin-top: -1.5%">
          <VaAvatar size="28px">
            <img src="/logo.jpg" alt="">
          </VaAvatar>
        </VaListItemSection>
        <VaListItemSection style="margin-left: -0.7%">
          <VaListItemLabel caption>
            {{ comment.title }} {{ comment.time }}
          </VaListItemLabel>
          <VaListItemLabel caption v-if="comment.replyInfo">
            <div class="meta">
              <div class="line">
                {{ comment.replyInfo }}
              </div>
            </div>
          </VaListItemLabel>
          <VaListItemLabel>
            {{ comment.body }}
          </VaListItemLabel>
        </VaListItemSection>

        <VaListItemSection icon>
          <VaIcon
              name="remove_red_eye"
              @click="toggleReplies"
          />
        </VaListItemSection>
        <VaListItemSection icon>
          <VaIcon
              name="comment"
              @click="toggleReplyForm"
          />
        </VaListItemSection>
      </VaListItem>
    </VaCardContent>
  </VaCard>
<!--  <VaDivider />-->
  <div v-if="showReplyForm" class="reply-form">
    <el-input
        type="textarea"
        v-model="replyText"
        placeholder="回复评论"
        rows="2"
    ></el-input>
    <el-button type="primary" @click="submitReply">提交</el-button>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const showReplyForm = ref(false);
    const replyText = ref('');
    const showReplies = ref(true);

    const toggleReplyForm = () => {
      showReplyForm.value = !showReplyForm.value;
    };

    const toggleReplies = () => {
      showReplies.value = !showReplies.value;
    };

    const submitReply = () => {
      if (replyText.value.trim()) {
        const reply = {
          id: Date.now(),
          body: replyText.value,
          time: new Date().toLocaleString(),
          isReply: true,
          replies: []
        };
        props.comment.replies.push(reply);
        replyText.value = '';
        showReplyForm.value = false;
      }
    };

    const replyToComment = (comment) => {
      emit('reply', comment);
    };

    return {
      showReplyForm,
      replyText,
      toggleReplyForm,
      toggleReplies,
      submitReply,
      showReplies,
      replyToComment,
    };
  },
};
</script>

<style>
.comment {
  margin-bottom: 20px;
}
.reply-form {
  margin-top: 10px;
}
.replies {
  margin-left: 20px;
  margin-top: 10px;
}

.box-card {
  padding: 20px;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-input {
  width: 100%;
  margin-bottom: 10px;
}

.comment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-actions {
  display: flex;
  align-items: center;
}

.comment-actions .el-button {
  margin-left: 10px;
}


.meta {
  font-size: 14px;
  margin-bottom: 10px;
  position: relative;
}

.line {
  padding-left: 10px;
  position: relative;
}

.line::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #babfbc;
}

.line > div {
  margin-bottom: 5px;
}

</style>
