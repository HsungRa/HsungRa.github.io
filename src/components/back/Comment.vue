<script>
import {defineComponent, ref, watch} from "vue";
import {loadComment, createComment, feedbackComment} from '../../util/CommentUtil.js'

export default defineComponent({
  name: "Comment",
  props: {
    blogInfo: {
      required: true
    }
  },
  setup(props) {
    const comment = ref('');
    const submitComment = () => {
      // 提交评论的逻辑
      console.log(comment.value);
    };
    const commentList = ref([])
    watch(() => props.blogInfo, (bi) => {
      loadComment(bi.category, bi.title).then(res => {
        // let comments = res.data
        // let result = []
        // for (let comment in comments) {
        //   let r = {
        //     id: comment.id,
        //     number: comment.number,
        //     title: comment.title,
        //     body: comment.body,
        //     time: comment.updated_at,
        //     discussNumber: comment.comments
        //   }
        //   // if (comment.comments > 0) {
        //   //   r['discussList'] = loadCommentDiscuss(r.number)
        //   // }
        //   result.push(r)
        // }
        // console.log(JSON.stringify(result))
        commentList.value = res.data
      })
    })
    return {
      commentList, comment, submitComment
    }
  },
})
</script>

<template>
  <div class="comment-box">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span></span>
        </div>
      </template>
      <VaList>
        <VaListItem
            v-for="item of commentList"
            :key="item"
            class="list__item"
        >
          <VaListItemSection avatar>
            <VaAvatar>
              <img src="/logo.jpg" alt="">
            </VaAvatar>
          </VaListItemSection>

          <VaListItemSection>
            <VaListItemLabel>
              {{ item.title }}
            </VaListItemLabel>

            <VaListItemLabel caption>
              {{ item.body }}
            </VaListItemLabel>
          </VaListItemSection>

          <VaListItemSection icon>
            <VaButton
                name="ellipsis"
                v-if="item.comments"
            />
            <VaButton
                round
                class="mr-6 mb-2"
                icon="comment"
            />
          </VaListItemSection>
        </VaListItem>
      </VaList>
      <template #footer>
        <el-input
            type="textarea"
            v-model="comment"
            placeholder="和谐评论，友善评论..."
            maxlength="1000"
            show-word-limit
            class="comment-input"
        ></el-input>
        <div class="comment-footer">
          <div class="comment-actions">
            <!--          <el-button icon="el-icon-money"></el-button>-->
            <!--          <el-button icon="el-icon-smile" @click="toggleEmojiPicker"></el-button>-->
            <!--          <el-button icon="el-icon-code"></el-button>-->
            <el-button type="primary" @click="submitComment">评论</el-button>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>


<style scoped>


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

<!--<script>-->
<!--import {defineComponent, ref, watch} from "vue";-->
<!--import {loadComment, createComment, feedbackComment} from '../util/CommentUtil.js'-->

<!--export default defineComponent({-->
<!--  name: "Comment",-->
<!--  props: {-->
<!--    blogInfo: {-->
<!--      required: true-->
<!--    }-->
<!--  },-->
<!--  setup(props) {-->
<!--    const markdownDom = ref('')-->
<!--    watch(() => props.blogInfo, (bi) => {-->
<!--      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>comment"+bi)-->
<!--      let rsp = loadComment(bi.category, bi.title)-->
<!--      console.log(rsp.data)-->
<!--    })-->
<!--    return {-->
<!--      markdownDom,-->
<!--    }-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<script setup>-->
<!--import {ref, computed} from 'vue';-->
<!--const props = defineProps(['foo'])-->
<!--const comment = ref('');-->

<!--const submitComment = () => {-->
<!--  // 提交评论的逻辑-->
<!--  console.log(comment.value);-->
<!--};-->


<!--// import EmojiPicker from 'vue3-emoji-picker';-->
<!--//const showEmojiPicker = ref(false);-->
<!--//-->
<!--// const toggleEmojiPicker = () => {-->
<!--//   showEmojiPicker.value = !showEmojiPicker.value;-->
<!--// };-->
<!--//-->
<!--// const addEmoji = (emoji) => {-->
<!--//   comment.value += emoji.i;-->
<!--//   showEmojiPicker.value = false;-->
<!--// };-->
<!--// const remainingCharacters = computed(() => 1000 - comment.value.length);-->

<!--</script>-->
