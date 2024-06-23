<template>
  <div class="nav-bar">
    <div class="logo-text-container">
      <router-link to="/">
        <img src="../assets/linzhi_logo.png" alt="logo" class="menu-logo">
      </router-link>
      <router-link class="nav-link" to="/#">素材模板</router-link>
      <router-link class="nav-link" to="#">AI生成</router-link>
      <router-link class="nav-link" to="#">一键生产</router-link>
      <router-link class="nav-link" to="#">AI客服</router-link>
      <router-link class="nav-link" to="#">客户端</router-link>
      <button v-if="!isLoggedIn" class="login-button" @click="Login()">登录/注册</button>
      <!-- 登录成功后显示头像 -->
      <img v-else :src="userAvatar" alt="avatar" class="avatar" @click="goToProfile">
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    userAvatar: {
      type: String,
      default: ''
    }
  },
  methods: {
    Login() {
      this.$emit('login', '登录');
    },
    goToProfile() {
      this.$router.push({ name: 'UserProfile' });
    }
  }
};
</script>

<style scoped>
/* 样式与之前相同 */
.nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap; /* 防止换行 */
  white-space: nowrap; /* 防止文字换行 */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden; /* 隐藏溢出内容 */
}
.login-button:hover{
  font-weight: bolder ;
}
.nav-link:hover{
  text-decoration-color: red; /* 可以根据需要修改颜色 */
  text-decoration: underline; /* 添加下划线 */
  font-weight: bold;
}
.menu-logo {
  width: 100px;
  height: 40px;
}

.nav-link {
  margin: 0 10px;
  font-size: 17px;
  color: #333;
  text-decoration: none;
}

.nav-link:hover {
  color: #666; /* 可以根据需要修改颜色 */
}

.login-button {
  border: none;
  background: none;
  padding: 0;
  color: #333;
  font-size: 14px;
  background-color: plum;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 17px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
