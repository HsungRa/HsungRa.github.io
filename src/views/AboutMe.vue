<template>
  <div class="about-container">
    <!-- 个人信息区域 -->
    <section class="profile-section">
      <div class="avatar-container">
        <img src="/logo.jpg" alt="头像" class="avatar">
      </div>
      <h1 class="name">Your Name</h1>
      <div class="title">Software Engineer / Tech Blogger</div>
    </section>

    <!-- 博客介绍区域 -->
    <section class="blog-intro">
      <h2>关于这个博客</h2>
      <p>这是一个记录我的技术学习、思考和生活的个人空间。在这里，我会分享：</p>
      <ul>
        <li>编程技术文章和教程</li>
        <li>个人项目经验分享</li>
        <li>技术见解和思考</li>
        <li>学习笔记和心得</li>
      </ul>
    </section>

    <!-- 联系方式区域 -->
    <section class="contact-section">
      <h2>联系方式</h2>
      <div class="contact-grid">
        <!-- Email -->
        <a href="xrui3.1415926@gmail.com" class="contact-item">
          <el-icon><Message /></el-icon>
          <span>Email</span>
          <div class="contact-detail">your.email@example.com</div>
        </a>

        <!-- Twitter -->
        <a href="https://twitter.com/yourhandle" target="_blank" class="contact-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
          </svg>
          <span>Twitter</span>
          <div class="contact-detail">@yourhandle</div>
        </a>

        <!-- Facebook -->
        <a href="https://facebook.com/yourprofile" target="_blank" class="contact-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
          <span>Facebook</span>
          <div class="contact-detail">你的Facebook主页</div>
        </a>

        <!-- 微信公众号 -->
        <div class="contact-item">
          <svg class="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9Z" />
          </svg>
          <span>微信公众号</span>
          <div class="contact-detail">
            <img src="/qrcode.jpg" alt="公众号二维码" class="qrcode">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Message } from '@element-plus/icons-vue'
import {inject} from "vue";

const globalConfig = inject("globalConfig");
globalConfig.leftAsideConfig.show = false;
globalConfig.leftAsideConfig.type = null;
globalConfig.leftAsideConfig.args = null;
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.profile-section {
  text-align: center;
  margin-bottom: 60px;
}

.avatar-container {
  margin-bottom: 20px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 2.5em;
  margin: 10px 0;
  color: v-bind('activeTheme.color');
}

.title {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.blog-intro {
  margin-bottom: 60px;
}

.blog-intro h2 {
  color: v-bind('activeTheme.color');
  margin-bottom: 20px;
}

.blog-intro p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.blog-intro ul {
  list-style-type: none;
  padding: 0;
}

.blog-intro li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.blog-intro li::before {
  content: "•";
  color: #23e066;
  position: absolute;
  left: 0;
}

.contact-section h2 {
  color: v-bind('activeTheme.color');
  margin-bottom: 30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;
}

.contact-item:hover {
  transform: translateY(-5px);
}

.icon {
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
  color: #23e066;
}

.contact-item span {
  font-weight: bold;
  margin-bottom: 5px;
}

.contact-detail {
  font-size: 0.9em;
  color: #666;
  text-align: center;
}

.qrcode {
  width: 120px;
  height: 120px;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .about-container {
    padding: 20px;
  }
}
</style>
