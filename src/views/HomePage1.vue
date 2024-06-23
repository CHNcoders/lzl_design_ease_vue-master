<template>
  <div class="home1">
    <!-- 引入导航栏组件 -->
    <NavBar :user="user" @login="login" />

    <!-- 其他内容 -->
    <div class="main-content">
      <div class="logo-text-container">
        <img src="../assets/白色logo.png" alt="main-logo" class="main-logo-inline">
        <h1 style="color: aliceblue;" class="lingzhi">灵制</h1>
      </div>
      <input type="text" class="search-bar" placeholder="搜索">
      <div class="design-product-container">
        <div class="design-container">
          <div class="design">图案设计</div>
        </div>
        <div class="product-container">
          <div class="product" @click="navigateToHomePage2">产品设计</div>
        </div>
      </div>
      <div class="button-image-container">
        <div class="overlay-text">探索更多</div>
        <div class="button-with-images">
          <button class="custom-button">LOGO设计</button>
          <div class="image-grid">
            <img src="../assets/Example1.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example2.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <button class="custom-button">文创图案</button>
          <div class="image-grid">
            <img src="../assets/Example3.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example4.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <button class="custom-button">商品贴图</button>
          <div class="image-grid">
            <img src="../assets/Example5.png" alt="logo" class="logo-grid-item">
            <img src="../assets/Example6.png" alt="logo" class="logo-grid-item">
          </div>
        </div>
        <div class="button-with-images">
          <button class="custom-button">包装图案</button>
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
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
    LoginIn
  },
  data() {
    return {
      activeIndex: '1',
      isshow: false,
      user: null // 添加用户数据
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    navigateToHomePage2() {
      this.$router.push({ name: 'HomePage2' });
    },
    login(msg) {
      console.log(msg);
      this.isshow = !this.isshow;
    },
    backto(msg) {
      console.log(msg);
      this.isshow = false;
    },
    async getUserInfo() {
      try {
        const response = await axios.get('你的获取用户信息接口');
        this.user = response.data;
      } catch (error) {
        console.error('获取用户信息失败', error);
      }
    }
  },
  created() {
    this.getUserInfo();
  }
};
</script>


<style scoped>
.home1{
  position: relative;
  width: 100%;
  height: 100%;
  background: #d9d9d9;
}
/* 添加 CSS 样式 */
/* 导航栏样式 */
/* 移除默认的 body 和 html 内边距和外边距 */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.lingzhi {
  letter-spacing: 7px;
  font-size: 40px;

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
/*探索更多css样式*/ 
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

.logo-text-container {
  display: flex;
  align-items: center;
  margin-right: 20px; /* 调整 Logo 和下拉菜单之间的间距 */
  margin-top: 85px;
  margin-bottom: 20px;
}
.main-logo-inline {
  margin-right: 10px; /* 调整图片与文字之间的间距 */
  margin-top: 0px;
  width: 100px;
  height: 100px;
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
  position: relative; /* 确保伪元素定位基于 .product */
  padding-bottom: 20px; /* 为紫色线条留出空间 */
  background-image: url("../assets/purple_line.png");
  background-repeat: no-repeat;
  background-size: 100px 5px; /* 将紫色线条拉伸到与文字一样的宽度 */
  background-position: bottom; /* 将紫色线条放在文字的下方 */
}
.product{
  margin-left: 125px;
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

.main-logo {
  width: 150px; /* 根据需要调整 */
  margin-bottom: 20px;
}

.search-bar {
  padding: 10px;
  /* margin-bottom: 20px; */
  width: 20%;
  border-radius: 20px; /* 添加圆角 */
  position: relative;
  height: 10px; /* 固定搜索栏距离父容器顶部的距离 */
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

button {
  padding: 10px 20px;
  margin: 10px;
}

.login{
  position: absolute;
  top: 25%;
  left: 25%;
}
</style>