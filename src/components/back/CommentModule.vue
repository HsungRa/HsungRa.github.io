<template>
  <div class="comment-box">
    <el-card class="box-card">
      <!--      <template #header>-->
      <!--        <div class="card-header">-->
      <!--          <span></span>-->
      <!--        </div>-->
      <!--      </template>-->
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" @reply="replyToComment"/>
      <template #footer>
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
      </template>
    </el-card>
  </div>
</template>

<script>
import {ref, watch} from 'vue';
import CommentItem from './CommentItem.vue';
import {loadComment, loadCommentDiscuss} from "../util/CommentUtil.js";

export default {
  components: {
    CommentItem,
  },
  props: {
    blogInfo: {
      required: true
    }
  },
  setup(props) {
    const newComment = ref('');
    const comments = ref([]);
    /**
     * submit new comment
     * @param parentComment
     */
    const addComment = (parentComment) => {
      if (newComment.value.trim()) {
        const comment = {
          id: Date.now(),
          body: newComment.value,
          date: new Date().toLocaleString(),
          isReply: false,
          replies: []
        };
        if (parentComment) {
          parentComment.replies.push(comment);
        } else {
          comments.value.push(comment);
        }
        newComment.value = '';
      }
    };

    const replyToComment = (parentComment) => {
      newComment.value = `@${parentComment.id} `;
      addComment(parentComment);
    };

    /**
     * load comment replies
     * @param param
     * @param replies
     */
        // const loadReplies = (param, replies) => {
        //   const commentNo=param.number;
        //   loadCommentDiscuss(commentNo).then(res => {
        //     let commentList = res.data
        //     for (let comment of commentList) {
        //       const item = {
        //         id: comment.id,
        //         number: comment.number,
        //         title: comment.title,
        //         body: comment.body,
        //         time: comment.updated_at,
        //         replies: []
        //
        //       }
        //       if (comment.comments) {
        //         let rs =[]
        //         loadReplies(comment,rs)
        //         item['replies'] = rs
        //       }
        //       replies.push(item)
        //     }
        //   })
        // }

    const loadReplies2 = async (param, replies) => {
          const commentNo = param.number;
          const res = await loadCommentDiscuss(commentNo);
          let commentList = res.data;
          for (let comment of commentList) {
            const item = {
              id: comment.id,
              number: comment.number,
              title: comment.title,
              body: comment.body,
              time: comment.updated_at,
              replies: []
            };
            if (comment.comments) {
              let rs = [];
              await loadReplies(comment, rs);  // Use await to ensure replies are loaded
              item.replies = rs;
            }
            replies.push(item);
          }
        };

    const loadReplies = async (param, replies) => {
      const commentNo = param.number;
      const res = await loadCommentDiscuss(commentNo);
      let commentList = res.data;
      for (let comment of commentList) {
        const item = {
          id: comment.id,
          number: comment.number,
          title: comment.title,
          body: comment.body,
          time: comment.updated_at,
          isReply: true,
          replies: []
        };
        if (comment.comments) {
          let rs = [];
          await loadReplies(comment, rs);  // Use await to ensure replies are loaded
          item.replies = rs;
        }
        replies.push(item);
      }
    };
    watch(() => props.blogInfo, async (bi) => {
      loadComment(bi.category, bi.title).then(async res => {
        let commentList = res.data
        for (let comment of commentList) {
          const item = {
            id: comment.id,
            number: comment.number,
            title: comment.title,
            body: comment.body,
            time: comment.updated_at,
            replies: []
          }
          if (comment.comments) {
            let rs = []
            await loadReplies(comment, rs)
            item['replies'] = rs
          }
          console.log(">>>>>>>>>>>>>>>>>>>>>11222:" + JSON.stringify(item))
          comments.value.push(item)
        }
      })
    })


    return {
      newComment,
      comments,
      addComment,
      replyToComment,
      loadReplies
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
</style>
