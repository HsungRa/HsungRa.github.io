<template>
  <div class="comment-box">
    <!--    <el-card class="box-card">-->
    <div v-for="comment in comments" :key="comment.id">
      <VaCard square>
        <VaCardContent>
          <VaListItem>
            <VaListItemSection avatar style="margin-top: -1.5%">
              <VaAvatar size="28px">
                <img :src=comment.userAvatar alt="">
              </VaAvatar>
            </VaListItemSection>
            <VaListItemSection style="margin-left: -0.7%">
              <VaListItemLabel caption>
                {{ comment.userName }} {{ comment.time }}
              </VaListItemLabel>
              <VaListItemLabel caption v-if="comment.isReply">
                <div class="meta">
                  <div class="line">
                    {{ comment.title }}
                  </div>
                </div>
              </VaListItemLabel>
              <VaListItemLabel>
                {{ comment.body }}
              </VaListItemLabel>
            </VaListItemSection>

            <VaListItemSection icon>
              <VaIcon
                  name="comment"
                  @click="toggleReplyForm(comment.number)"
              />
            </VaListItemSection>
          </VaListItem>
        </VaCardContent>
      </VaCard>
      <!--  <VaDivider />-->
      <div v-if="showReplyForm===comment.number" class="reply-form">
        <el-input
            type="textarea"
            v-model="replyText"
            placeholder="回复评论"
            rows="2"
        ></el-input>
        <el-button type="primary" @click="addComment(comment)">提交</el-button>
      </div>
    </div>
    <!--      <template #footer>-->
    <el-input
        type="textarea"
        v-model="newComment"
        placeholder="和谐评论，友善评论..."
        maxlength="1000"
        show-word-limit
        class="comment-input"
    ></el-input>
    <div class="comment-footer">
      <div class="comment-actions">
        <el-button type="primary" @click="addComment(null)">评论</el-button>
      </div>
    </div>
    <!--      </template>-->
    <!--    </el-card>-->
  </div>
</template>

<script>
import {ref, watch} from 'vue';
import {getBlogComment, createComment, feedbackComment, parseCommentRsp} from "../util/CommentUtil.js";
import {AUTH_KEY, signInWithGitHub,} from "../util/ThirdAuthUtil.js";
import {get, put} from "../util/StorageUtil.js"

export default {
  props: {
    blogInfo: {
      required: true
    }
  },
  setup(props) {
    const newComment = ref('');
    const replyText = ref('');
    const comments = ref([]);
    const showReplyForm = ref(-1);
    const toggleReplyForm = (number) => {
      if (showReplyForm.value !== number) {
        showReplyForm.value = number;
      } else {
        showReplyForm.value = -1;
      }

    };

    /**
     * submit new comment
     * @param parentComment
     */
    const addComment = async (parentComment) => {
      if (null == get(AUTH_KEY) || undefined === get(AUTH_KEY)) {
        signInWithGitHub()
      }

      let item;
      if (parentComment != null) {
        let res = await feedbackComment(props.blogInfo.category, props.blogInfo.title,  replyText.value.trim(), parentComment);
        item = parseCommentRsp(res.data, parentComment)
        replyText.value = '';
      } else {
        if (newComment.value.trim()) {
          let res = await createComment(props.blogInfo.category, props.blogInfo.title,  newComment.value.trim());
          item = parseCommentRsp(res.data, parentComment)
          newComment.value = '';
        }
      }
      comments.value.push(item);
    };

    watch(() => props.blogInfo, async (data) => {
      comments.value = await getBlogComment(data.category, data.title)
    })

    return {
      newComment,
      replyText,
      comments,
      addComment,
      toggleReplyForm,
      showReplyForm
    };
  },
};
</script>

<style>
.comment-card {
  margin-bottom: 20px;
}

.comments {
  margin-top: 20px;
}

.box-card {

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

.reply-form {
  margin-top: 10px;
}

.replies {
  margin-left: 20px;
  margin-top: 10px;
}

.box-card {
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
