<script setup>
import {ref} from 'vue'

const user = ref({
  avator: require('@/assets/avator.png'), // 使用 require 引入图片
  job: '设计师',
  account: '5844214'
});

const profs = ref([
  {
    id: '1',
    proce: '项目一',
    name: '钥匙扣'
  },
  {
    id: '2',
    proce: '项目二',
    name: '笔架'
  }
]);
const isShow=ref(false)

const toggleShow=()=>{
    isShow.value=!isShow.value;
}
</script>

<template>
<div class="left">
    <div class="left_top">

    <div class="user">
      <div class="user_img">
        <img :src="user.avator" alt="">
      </div>
      <div class="user_info">
        <p class="ft">{{user.job}}</p>
        <p>账号:{{user.account}}</p>
      </div>
    </div>

    <RouterLink to="/person" class="item_link" :class="{ active: $route.path === '/person' }" exact>
     <div class="item">
      <div class="img">
        <img src="@/assets/Vector.png" alt="">
      </div>
      <span>个人首页</span>
    </div>
  </RouterLink>

    <RouterLink to="/design" class="item_link" :class="{ active: $route.path === '/design' }" exact>
    <div class="item">
      <div class="img">
        <img src="@/assets/Frame.png" alt="">
      </div>
      <span>我的设计</span>
    </div>
  </RouterLink>

    <RouterLink to="/material" class="item_link" :class="{ active: $route.path === '/material' }" exact>
    <div class="item">
      <div class="img">
        <img src="@/assets/Frames.png" alt="">
      </div>
      <span>我的素材</span>
    </div>
  </RouterLink>

    <RouterLink to="/order" class="item_link" :class="{ active: $route.path === '/order' }" exact>
    <div class="item">
      <div class="img">
        <img src="@/assets/Framess.png" alt="">
      </div>
      <span>我的订单</span>
    </div>
  </RouterLink>

    <RouterLink to="/collection" class="item_link" :class="{ active: $route.path === '/collection' }" exact>
    <div class="item">
      <div class="img">
        <img src="@/assets/hobby.png" alt="">
      </div>
      <span>我的收藏</span>
    </div>
  </RouterLink>

   </div>

   <div class="left_center">

    <div class="item">
      <div class="img">
        <img style="background:#A500FE;" src="@/assets/qun.png" alt="">
      </div>
      <span>设计师团队</span>
      <div class="img" @click="toggleShow">
        <img src="@/assets/btm.png" alt="">
      </div>

    </div>
      
  
    <div v-show="isShow" class="lift" v-for="(item, index) in profs" :key="index">
    <p> {{ item.proce }}  {{ item.name }}</p>
   </div>


   </div>


   <div class="left_bottom">
    <div class="item">
      <div class="img">
        <img style="background:#000;" src="@/assets/game.png" alt="">
      </div>
      <span>创建团队</span>
      
    </div>
   </div>

   </div>
</template>

<style scoped>
a{
    text-decoration: none;
    color: #000;
    display: block;
    width: 100%;
}
.left{
     /* box-shadow: 0px 1px 1px 1px #a1a1a1; */
     width: 222px;
     height: 100vh;
     /* margin-top: 84px; */
     
}
.left_top{
    width: 222px;
    height: 423px;
    display: flex;
    flex-direction: column;
    /* box-shadow:0 2px 0 0px #a1a1a1 ; */
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
    /* border-right:1px solid #a1a1a1 ; */
}
.user{
    height: 72px;
    border-bottom: 1px solid #a1a1a1;
    /* box-shadow: 0px 1px 1px 1px #a1a1a1; */
    border-bottom-left-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    margin-bottom: 5px;
    /* justify-content: space-between; */
}
.user_img{
    width: 50px;
    height: 50px;
}
.user_img img{
    width: 50px;
    height: 50px;
}
.user_info{
    /* display: flex;
    flex-direction: column; */
    font-size: 10px;
    padding-left: 10px;
}
.user_info .ft{
    font-size: 18px;
    margin-bottom: 5px;
}
.item_link {
  text-decoration: none; /* 移除链接的下划线 */
  color: inherit; /* 继承父级的文本颜色 */
  width: 200px;
  height: 57px;
  margin: 5px 12px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3 ease;
}
.active {
  background-color: #E6E6FA;

}


.item {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center;
  
}

.img {
  margin-right: 10px;/* 添加间距 */
}

.img img {
  display: block; /* 防止图片底部留白 */
}
.left_center{
    width: 216px;
    margin: 25px 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
 .item{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* border-bottom: 1px solid #a1a1a1; */
}
.left_center  .item{
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #a1a1a1;
}
.lift{
    transition: height 3s ease;
}
.left_bottom{
    width: 216px;
    height: 70px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
    border-radius: 4px;
    margin: 25px 10px;
}
</style>