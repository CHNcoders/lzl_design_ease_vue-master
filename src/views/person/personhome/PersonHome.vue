<script setup>
import {ref} from 'vue'

const productslist=ref([
  {
    id:'1',
    picture:require('@/assets/products1.png'),
  },
  {
    id:'2',
    picture:require('@/assets/products2.png'),
  },
  {
    id:'3',
    picture:require('@/assets/products3.png'),
  },
  {
    id:'4',
    picture:require('@/assets/products4.png'),
  },
  {
    id:'5',
    picture:require('@/assets/products5.png'),
  },
  {
    id:'6',
    picture:require('@/assets/products6.png'),
  },
])

const hotlist=ref([
  {
    id:'1',
    picture:require('@/assets/hot1.png'),
  },
  {
    id:'2',
    picture:require('@/assets/hot2.png'),
  },
  {
    id:'3',
    picture:require('@/assets/hot3.png'),
  },
  {
    id:'4',
    picture:require('@/assets/hot4.png'),
  },
  {
    id:'5',
    picture:require('@/assets/hot5.png'),
  },
  {
    id:'6',
    picture:require('@/assets/hot6.png'),
  },
])


</script>

<template>
<div class="personhome">
  <h1 class="fntone">个人首页</h1>

  <div class="list">
    <div class="item">
      <div class="img" style="background:#4200FE;opacity: 0.47;">
        <img  src="@/assets/list1.png" alt="">
      </div>
      <span>新建图案</span>
    </div>
    <div class="item">
    <div class="img" style="background:#7000FE;opacity: 0.6;">
        <img src="@/assets/list2.png" alt="">
      </div>
      <span>新建产品</span>
    </div>
    <div class="item">
     <div class="img" style="background:#9D00FE;opacity:0.6;">
        <img src="@/assets/list3.png" alt="">
      </div>
      <span>导入设计</span>
    </div>
  </div>

  <h2 class="fnttwo">搜索资源，激发灵感</h2>

  <div class="search">
    <div class="txt">
      <div class="img">
        <img src="/assets/灵制LOGO白色_001 1.png" alt="">
      </div>
      <span class="logo">灵制</span>
    </div>
    <div class="ipt">
      <input type="text" placeholder="搜索设计模板...">
      <img src="@/assets/search.png" alt="">
    </div>
  </div>

  <h3 class="fntthree">设计产品类型</h3>

  <div class="products">
    <div class="imt" v-for="(item,index) in productslist" :key="index">
      <img :src="item.picture" alt="">
    </div>
  </div>
  <h3 class="fntthree">热门模板</h3>
  <div class="hotproducts">
    <div class="imt" v-for="(item,index) in hotlist" :key="index">
      <img :src="item.picture" alt="">
    </div>
  </div>
   <span class="rad">?</span>
</div>
  
</template>

<style  scoped>
.personhome{
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
   width: 90vw;
  /* margin-top: -0px; */
}
.fntone{
  font-weight: bold;
  line-height: 40px;
  font-size: 40px;
  text-align: left;
  margin-left: 25px;
  color: #000000;
}
.list{
  margin: 10px 5px;
  display: flex;
  flex-direction: row;
  height: 110px;
 
}
.list .item{
  width: 372px;
  height: 100px;
  border-radius: 10px;
  padding: 14px 15px;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
  margin-left: 25px ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: 24px;
  line-height: 24px;
}
.list .item .img{
  width: 60px;
  height: 60px;
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  border-radius: 5px;
}
.list .item img{
  width: 40px;
  height: 40px;
  display: block;
}
.fnttwo{
  font-weight: bold;
  line-height: 32px;
  font-size: 32px;
  text-align: left;
  margin: 35px 25px;  
  color: #000000;
}
.search{
  height: 224px;
  background: url('@/assets/Rectangle 2.png') no-repeat center center/cover;
  margin-left: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  position: relative;
}
.txt{
  display: flex;
  flex-direction: row;
  margin-top: 17px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.txt .img{
  width: 56px;
  height: 67px;
  /* position: absolute;
  left: 400px; */
}
.logo{
  font-size: 36px;
  color: #fff;
}
.ipt{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.ipt input{
  width: 536px;
  height: 37px;
  margin-right: 5px;
  border: none;
  outline: none;
}
.fntthree{
  line-height: 24px;
  font-size: 24px;
  text-align: left;
  margin-left: 25px;
  color: #000000;
  margin-top: 30px;
}
.products{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-left: 25px;
}
.imt{
  width: 180px;
  height: 131px;
  margin-right: 25px;
}
.hotproducts{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-left: 25px;
}
.rad{
  width: 40px;
  height: 40px;
  color: #fff;
  background: #A500FE;
  position: absolute;
  bottom: 5px;
  right: 10px;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
}
</style>

