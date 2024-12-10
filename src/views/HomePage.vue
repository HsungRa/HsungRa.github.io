<!--<template>-->
<!--  <a-layout style="height: 100%; width: 100%">-->
<!--    <a-layout-sider :style="siderStyle">Sider</a-layout-sider>-->
<!--    <a-layout>-->
<!--      <a-layout-content :style="contentStyle">-->
<!--        <a-flex gap="middle" align="start" vertical>-->
<!--          <a-card>-->
<!--            <p>How Are U</p>-->
<!--          </a-card>-->
<!--        </a-flex>-->
<!--        <a-flex gap="middle" align="end" vertical>-->
<!--          <a-card>-->
<!--            <p>Im Fine Thank U</p>-->
<!--          </a-card>-->
<!--        </a-flex>-->

<!--      </a-layout-content>-->
<!--      <a-layout-footer :style="footerStyle">-->
<!--        <a-input :value="value" :style="inputStyle" placeholder="">-->
<!--          <template #suffix>-->
<!--            <a-button type="primary" shape="round">-->
<!--              <template #icon>-->
<!--                <UploadOutlined />-->
<!--              </template>-->
<!--            </a-button>-->
<!--          </template>-->
<!--        </a-input>-->
<!--      </a-layout-footer>-->
<!--    </a-layout>-->
<!--  </a-layout>-->

<!--</template>-->

<!--<script>-->
<!--import {UploadOutlined} from '@ant-design/icons-vue';-->
<!--import {nextTick} from "vue";-->

<!--export default {-->
<!--  components: {-->
<!--    UploadOutlined,-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      // 定义全局数据-->
<!--      value: '',-->
<!--      footerStyle: {-->
<!--        textAlign: 'center',-->
<!--        height: '20%',-->
<!--        // width: '80%',-->
<!--        backgroundColor: '#f8e6db',-->
<!--      },-->
<!--      siderStyle: {-->
<!--        height: '100%',-->
<!--        width: '20%',-->
<!--        backgroundColor: '#c6dcec',-->
<!--      },-->
<!--      contentStyle: {-->
<!--        height: '80%',-->
<!--        // width: '80%',-->
<!--        backgroundColor: '#f8efc8',-->
<!--      },-->
<!--      inputStyle:{-->
<!--        width: '60%',-->
<!--        height: '80%',-->
<!--      }-->
<!--    };-->
<!--  },-->
<!--  created() {-->
<!--    console.log("Component created.");-->
<!--  },-->
<!--  methods: {-->
<!--    demoMethod() {-->
<!--      // 定义函数-->
<!--    },-->
<!--  },-->
<!--  mounted() {-->
<!--    console.log("Component mounted.");-->
<!--    // 钩子函数-->
<!--  },-->
<!--  nextTick() {-->
<!--    console.log("Component nextTick.");-->
<!--  },-->
<!--};-->

<!--</script>-->

<template>
  <a-row>
    <a-col :span="3"></a-col>
    <a-col :span="18">
      <div class="chat-container">
    <!-- 消息显示区域 -->
    <main class="chat-messages" ref="messages">
      <div
          v-for="(msg, index) in messageList"
          :key="index"
          :class="['message', msg.sender === 'user' ? 'user-message' : 'gpt-message']"
      >
        <div class="message-content">
          <p>{{ msg.content }}</p>
        </div>
      </div>
    </main>

    <!-- 输入区域 -->
    <footer class="chat-footer">
      <a-input
          v-model:value="userInput"
          placeholder="Send a message..."
          class="chat-input"
          @keydown.enter="sendMessage"
      />
      <a-button type="primary" class="send-button" shape="round" @click="sendMessage">
        <template #icon>
          <ToTopOutlined />
        </template>
        Send
      </a-button>
    </footer>
  </div>
    </a-col>
    <a-col :span="3"></a-col>
  </a-row>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';
import {ToTopOutlined} from '@ant-design/icons-vue';

const userInput = ref('')
const messageList = ref([])

const sendMessage = () => {
  console.log(userInput.value);
  const content = userInput.value.trim();
  if (!content) return;
  // 添加用户消息
  messageList.value.push({sender: 'user', content});
  // 清空输入框
  userInput.value = '';
  // 模拟 ChatGPT 响应
  simulateResponse(content);
}

const simulateResponse = (input) => {
  setTimeout(() => {
    const response = `ChatGPT: Here is a reply to "${input}"`;
    messageList.value.push({sender: 'gpt', content: response});
    // 滚动到最新消息
    const messagesDiv = document.querySelector('.chat-messages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 1000);
}
</script>

<style scoped>
/* 容器整体样式 */
.chat-container {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f8;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* 消息显示区域 */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

/* 消息样式 */
.message {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}

/* 用户消息 */
.user-message {
  justify-content: flex-end;
}

.user-message .message-content {
  background-color: #d7e4f3;
  color: #2a2c39;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 60%;
  text-align: right;
}

/* GPT 消息 */
.gpt-message .message-content {
  background-color: #f1f1f1;
  color: #333;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 60%;
  text-align: left;
}

/* 输入区域 */
.chat-footer {
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  align-items: center;
  gap: 10px;
}

.ant-input {
  flex: 1;
  width: 70% !important;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  padding: 10px 15px;
}

.send-button {
  border-radius: 20px;
}
</style>
