<template>
  <div class="home2">

    <!-- 引入导航栏组件 -->
    <NavBar :user="user" @login="login" />

    <!-- 其他内容 -->
    <div class="main-content">
      <div>
        <h1 class="h1_title">根据你的灵感制造</h1>
      </div>
      <!-- 修改logo和文本使其在同一行显示 -->
      <div class="logo-text-container">
        <img src="../assets/白色logo.png" alt="main-logo" class="main-logo-inline">
        <h1 style="color: aliceblue;" class="lingmaker">LINGMAKER</h1>
      </div>
      <!-- 修改搜索栏样式 -->
      <input type="text" class="search-bar" placeholder="搜索">
      <!-- 添加设计和产品文字 -->
      <div class="design-product-container">
        <div class="design-container">
          <div class="design" @click="navigateToHomePage1">图案设计</div>
        </div>
        <div class="product-container">
          <div class="product">产品设计</div>
        </div>
      </div>
      <!-- 添加四个按钮和每个按钮下的图片 -->
      <div class="button-image-container">
        <div class="button-with-images">
          <button class="custom-button">商品设计</button>
          <div class="image-grid">
            <img src="../assets/Example1.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example2.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <div class="overlay-text">探索更多</div>
          <button class="custom-button">文创设计</button>
          <div class="image-grid">
            <img src="../assets/Example3.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example4.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <button class="custom-button">生成VI</button>
          <div class="image-grid">
            <img src="../assets/Example5.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example6.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <button class="custom-button">更多</button>
          <div class="image-grid">
            <img src="../assets/Example7.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example8.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
      </div>
    </div>
    <div class="login" v-show="isshow">
      <login-in @backto="backto" />
    </div>
  </div>
</template>


<script>
import axios from 'axios'; // 引入 axios
import LoginIn from '@/components/LoginIn.vue';
import NavBar from '../components/NavBar.vue'; // 引入 NavBar 组件

export default {
  components: {
    NavBar, // 注册 NavBar 组件
    LoginIn //登录组件
  },
  data() {
    return {
      activeIndex: '1',
      isshow:false,
      user:null // 添加用户数据
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    navigateToHomePage1() {
      this.$router.push({ name: 'HomePage1' });
    },
    login(msg){
      console.log(msg);
      this.isshow = !this.isshow;
    },
    backto(msg){
      console.log(msg);
      this.isshow = false;
    },
    async getUserInfo(){
      try{
        const response = await axios.get('你的获取用户信息接口');
        this.user = response.data;
      }catch (error){
        console.error('获取用户信息失败',error);
      }
    }
  },
  created(){
    this.getUserInfo();
  }
};
</script>

<style scoped>
/* 添加 CSS 样式 */
/* 导航栏样式 */
/* 移除默认的 body 和 html 内边距和外边距 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
/*根据你的灵感制造title*/ 
.h1_title {
  color: white;
  font-size: 70px;
  margin-bottom: 0px;
  margin-top: 40px;
  letter-spacing: 10px;
}
.lingmaker {
  font-weight: lighter;
}

.main-content {
  background-image: url("../assets/主页背景.png");
  flex-wrap: nowrap; /* 防止换行 */
  white-space: nowrap; /* 防止文字换行 */
  background-size: cover;
  overflow: hidden;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh; /*确保背景覆盖整个页面*/
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px; /*添加顶部内边距*/
  box-sizing: border-box; /* 确保内边距计算在内 */
  position: relative;
}

.search-bar {
  padding: 10px;
  /* margin-bottom: 20px; */
  width: 20%;
  border-radius: 20px; /* 添加圆角 */
  position: relative;
  height: 10px; /* 固定搜索栏距离父容器顶部的距离 */
}
/*探索更多css样式 */
.overlay-text {
  position: absolute; /* 绝对定位 */
  right: 0px; /* 距离右边10px */
  top: 72%; /* 垂直居中 */
  transform: translateY(-50%); /* 垂直居中 */
  background-color: rgba(255,255,255, 0.1); /* 半透明背景色 */
  color: white; /* 文本颜色 */
  padding: 190px 150px; /* 内边距 */
  border-radius: 5px; /* 圆角 */
  font-size: 1.5em; /* 字体大小 */
  z-index: 10; /* 确保覆盖在其他元素之上 */
}
/* 菜单栏 Logo 和文字样式 */
.login-button {
  border: none; /* 移除按钮边框 */
  background: none; /* 移除背景颜色 */
  padding: 0; /* 移除内边距 */
  text-align: right; /* 右对齐 */
  /* 调整与上一个下拉菜单之间的间距 */
  margin-left: 150px;
  color: #333; /* 设置文字颜色 */
  font-size: 14px; /* 设置文字大小 */
  background-color: plum;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 17px;
}
.el-dropdown-link {
  margin-left: 90px;
  margin-right: 90px;
  font-size: 17px;
}
.logo-text-container {
  display: flex;
  align-items: center;
  margin-right: 20px; /* 调整 Logo 和下拉菜单之间的间距 */
}

.menu-logo {
  width: 40px; /* 根据需要调整 Logo 大小 */
  height: 40px; /* 根据需要调整 Logo 大小 */
}

.menu-text {
  color: black;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
}
.main-logo-inline {
  margin-right: 10px; /* 调整图片与文字之间的间距 */
  margin-top: 0px;
  width: 50px;
  height: 50px;
}

/* 图案设计 产品设计css */
.design-product-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 添加上边距 */
}

.design-container,
.product-container {
  flex: 1; /* 让两个容器大小一致 */
  display: flex;
  justify-content: center;
}
.design {
  margin-right: 125px;
}
.product{
  margin-left: 125px;
  position: relative; /* 确保伪元素定位基于 .product */
  padding-bottom: 20px; /* 为紫色线条留出空间 */
  background-image: url("../assets/purple_line.png");
  background-repeat: no-repeat;
  background-size: 100px 5px; /* 将紫色线条拉伸到与文字一样的宽度 */
  background-position: bottom; /* 将紫色线条放在文字的下方 */
}
.design,
.product {
  padding: 10px 225px;
  /* background-color: white; */
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 25px;
}



.main-logo {
  width: 150px; /* 根据需要调整 */
  margin-bottom: 20px;
}



/* 按钮和图片容器 */
.button-image-container {
  display: flex;
  justify-content: space-around; /* 使按钮平均分布 */
  width: 100%; /* 宽度设为100%以占据父容器的宽度 */
  margin: 20px 0; /* 添加垂直外边距 */
}

.button-with-images {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-grid-item {
  margin: 10px;
  width: 380px; /* 根据需要调整图片大小 */
  height: 200px; /* 根据需要调整图片大小 */
}

.custom-button {
  background-image: url("../assets/Rectangle8.png");
  background-color: rgba(255, 255, 255, 0); /* 设置透明背景颜色 */
  margin: 10px;
  padding: 20px; /* 调整按钮内边距 */
  width: 380px;
  height: 80px;
  background-size: cover; /* 确保背景图片覆盖按钮 */
  background-position: center; /* 背景图片居中 */
  border: none; /* 移除边框 */
  border-radius: 10px; /* 添加圆角 */
  color: white; /* 设置文字颜色 */
  font-size: 20px; 
}

.image-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

/* 移除默认的 body 和 html 内边距和外边距 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

button {
  padding: 10px 20px;
  margin: 10px;
}
</style>
