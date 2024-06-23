<template>
  <div class="suicaipage">
      <!-- 引入导航栏组件 -->
      <NavBar :user="user" @login="login" />

      <!-- 其他内容 -->
    <div class="main-content">
      <div class="search">
       <div class="txt">
         <div class="logo">
           <img src="../assets/白色logo.png" class="img_logo">
         </div>
         <span class="text">灵制</span>
       </div>
       <div class="input">
        <input type="text" placeholder="搜索设计模板..." onkeydown="if(event.keyCode==13){gosubmit();}" class="input_box"> 
        <!--回车搜索-->
        <button class="bt" click="upload" style="cursor:pointer"></button>
        <!--img src="../assets/search.png" class="img_search"-->
       </div>
       <div class="container">
        <div class="lan">
          <img src="../assets/文创.png" class="label">
          <img src="../assets/二次元.png" class="label">
          <img src="../assets/服装.png" class="label">
          <img src="../assets/配饰.png" class="label">
          <img src="../assets/礼品工艺品.png" class="label">
          <img src="../assets/印刷品.png" class="label">
          <img src="../assets/包装.png" class="label">
        </div>
         <div>
           <div class="flex-container">
             <div class="flex-item">文创</div>
             <div class="flex-item">二次元</div>
             <div class="flex-item">服装</div>
             <div class="flex-item">配饰</div>
             <div class="flex-item">礼品工艺品</div>
             <div class="flex-item">印刷品</div>
             <div class="flex-item">包装</div>
           </div>
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
        user: null,// 添加用户数据
      };
    },
    methods: {
      toggleIcon() {
        this.currentImage = this.currentImage === this.image1 ? this.image2 : this.image1;
      },
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
<style>
  .sucaipage{
  position: relative;
  margin: 0%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 添加 CSS 样式 */
/* 导航栏样式 */
/* 移除默认的 body 和 html 内边距和外边距 */

.logo{
  z-index: 2;
  width: 40px;
  height: 40px;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: center;
}
.img_logo{
  width: 150%;
}
.search{
  position: absolute;
  background: url(../assets/Rectangle2.png) no-repeat center center/cover;
  top: 5%;
  width: 99%;
  height: 35%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}
.text{
  font-size: 36px;
  color: white;
  margin-left: 20px;
}
.txt{
  display: flex;
  flex-direction: row;
  margin-top: 17px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.input{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
}
.input_box{
  width: 400px;
  height: 30px;
  justify-content: center;
}
.img_search{
  margin-left: 10px;
}
.bt{
  background: url(../assets/search.png) no-repeat center center/cover;;
  width: 35px;
  height: 35px;
  border: none;
  padding-left: 5px;
  margin-left: 10px;
}
.bt:active{
  width: 38px;
  height: 38px;
  padding-left: 3px;
  margin-left: 7px;
}

  .lan{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }
  .label{
    max-width: 100px;
    height: 100px;
  }
  .flex-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .flex-item {
    color: white;
  }
</style>
  
  