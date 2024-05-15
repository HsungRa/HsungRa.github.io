<script>
import {defineComponent} from "vue";


export default defineComponent({
  name: "Comment",
  props: {
    blog: {
      type: String,
      required: true
    }
  },
})
</script>
<script setup>
import {ref, computed} from 'vue';
const comment = ref('');

const submitComment = () => {
  // 提交评论的逻辑
  console.log(comment.value);
};

// import EmojiPicker from 'vue3-emoji-picker';
//const showEmojiPicker = ref(false);
//
// const toggleEmojiPicker = () => {
//   showEmojiPicker.value = !showEmojiPicker.value;
// };
//
// const addEmoji = (emoji) => {
//   comment.value += emoji.i;
//   showEmojiPicker.value = false;
// };
// const remainingCharacters = computed(() => 1000 - comment.value.length);

</script>
<template>
  <div class="comment-box">
    <el-card class="box-card">
      <div class="comment-header">
        <img src="../assets/logo.jpg" class="avatar">
      </div>
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
      <!--      <EmojiPicker v-if="showEmojiPicker" @emoji-click="addEmoji"/>-->
    </el-card>
  </div>
</template>


<style scoped>
.comment-box {
  max-width: 600px;
  margin: 20px auto;
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
