<template>
  <template v-for="comment in comments" :key="comment.id">
    <comment-item :item="comment" @reply="handleReply"/>
  </template>
  <a-comment>
    <template #avatar>
      <a-avatar :src="userAvatar" alt="hi~">
      </a-avatar>
    </template>
    <template #content>
      <a-form-item>
        <span key="comment-basic-cancelReply" v-if="replyTo !=null">
          <span style="color: #cccecf; cursor: auto">
            @{{ replyTo.length > 150 ? replyTo.substring(0, 150) +'...' : replyTo }}
          </span>
          <a-tooltip title="取消回复">
            <CloseCircleOutlined @click="cancelReply" :style="{fontSize: '13px', color: '#cccecf', float:'right'}"/>
          </a-tooltip>
        </span>
        <a-textarea v-model:value="commentText" :rows="4" :maxlength="500" ref="commentInput"/>
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" type="primary" @click="addComment()">
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>

<script>
import {
  addComment,
  loadComment,
} from '../service/CommentService.js';
import {authCheck,} from "../util/ThirdAuthUtil.js";
import CommentItem from "./CommentItem.vue";
import {CloseCircleOutlined} from '@ant-design/icons-vue';
import {authInfo} from "../util/StorageUtil.js";

export default {
  components: {CommentItem, CloseCircleOutlined,},
  props: {
    commentNumber: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      commentText: null,
      replyTo: null,
      comments: [],
      showReplyForm: -1,
      submitting: true,
      authUser: null,
      userAvatar: "/logo.jpg",
    };
  },
  methods: {
    toggleReplyForm(number) {
      if (this.showReplyForm !== number) {
        this.showReplyForm = number;
      } else {
        this.showReplyForm = -1;
      }
    },
    handleReply(reply_to) {
      console.log(">>>>>>>>>>>>>>>>>>>>>>reply_to", reply_to.content);
      this.replyTo = reply_to.content;
      console.log(this.$refs.commentInput);
      this.$refs.commentInput.$el.scrollIntoView({behavior: "smooth"});

    },
    cancelReply(){
      this.replyTo = null
    },
    /**
     * submit new comment
     */
    addComment() {
      if (this.commentText == null || this.commentText.trim().length === 0) {
        alert("请输入评论内容");
      }
      authCheck((authUser)=>{
        this.authUser = authUser
        let comment = this.commentText.replace('>','&gt;')
        if (this.replyTo != null) {
          comment = `> ${this.replyTo}\r\n\r\n${comment}`
        }
        addComment(this.authUser, this.commentNumber, comment.trim()).then((res) => {
          if (null===res){
            return;
          }
          this.commentText = '';
          loadComment(this.commentNumber).then((res) => {
            this.comments = res.root.children
          });
        });
      });
    },
  },
  mounted() {
    this.authUser = authInfo.user
    if (this.authUser !== null && this.commentNumber!==null && this.commentNumber!==undefined) {
      loadComment(this.commentNumber).then((res) => {
        if (res !== null){
          this.comments = res.root.children
        }
      });
    }
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
