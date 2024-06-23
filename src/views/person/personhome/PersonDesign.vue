<script setup>
import {ref} from 'vue'

const hostrylist=ref([
  {
    id:'1',
    picture:require('@/assets/hostory1.png'),
  },
  {
    id:'2',
    picture:require('@/assets/hostory2.png'),
  },
  {
    id:'3',
    picture:require('@/assets/hostory3.png'),
  },
  {
    id:'4',
    picture:require('@/assets/hostory4.png'),
  },
  {
    id:'5',
    picture:require('@/assets/hostory5.png'),
  }
])

const floderlist=ref([
  {
    id:'1',
    picture:require('@/assets/wenjianjia.png'),
  },
  {
    id:'2',
    picture:require('@/assets/wenjianjia.png'),
  },
  {
    id:'3',
    picture:require('@/assets/wenjianjia.png'),
  },
  {
    id:'4',
    picture:require('@/assets/wenjianjia.png'),
  },
  {
    id:'5',
    picture:require('@/assets/wenjianjia.png'),
  }
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

const search=ref('')

</script>

<template>
<div class="personhome">

  <div class="tab">
    <h1 class="fntone">我的设计</h1>
    <div class="tab_r">
      <input type="text" v-model="search" placeholder="搜索...">
      <img style="width:20px;height:20px;" src="@/assets/searchtab.png" alt="">
    </div>
  </div>

  <div class="list">
    <div class="item">
      <div class="img" style="background:#4200FE;opacity: 0.47;">
        <img  src="@/assets/design.png" alt="">
      </div>
      <span>新建文件夹</span>
    </div>
    <div class="item">
     <div class="img" style="background:#9D00FE;opacity:0.6;">
        <img src="@/assets/list3.png" alt="">
      </div>
      <span>导入设计</span>
    </div>
  </div>

  <h2 class="fnttwo">历史设计</h2>

 <div class="products">
    <div class="imt_history" v-for="(item,index) in hostrylist" :key="index">
      <img :src="item.picture" alt="">
    </div>
  </div>

<h2 class="fnttwo">文件夹</h2>
 <div class="flod">
    <div class="floder" v-for="(item,index) in floderlist" :key="index">
      <img :src="item.picture" alt="">
    </div>
  </div>
  <span class="floder_name">文件名</span>

  <h3 class="fntthree">最近浏览</h3>
  <div class="hotproducts">
    <div class="hot_mits" v-for="(item,index) in hotlist" :key="index">
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
.tab{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.tab_r{
  width: 160px;
  height: 35px;
  border-radius: 10px;
  border: 2px solid rgba(0,0,0,0.15);
  box-shadow: 3px 2px rgba(0,0,0,0.15);
  position: relative;
}
.tab_r input{
  border: none;
  width: 160px;
  height:35px;
  border-radius: 10px;
  outline: none;
}
.tab_r img{
  position: absolute;
  right: 5px;
  top: 8px;
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

.imt_history{
  width: 220px;
  height: 178px;
  margin-right: 25px;
}
.flod{
  display: flex;
  flex-direction: row;
  align-items: left;
  /* justify-content: center; */
  text-align: left;
  margin-left: 25px;
}
.floder{
  width: 150px;
  height: 150px;
  margin-right: 35px;
}
.floder_name{
    font-size: 14px;
    text-align: left;
    margin-left: 25px;
}

.hotproducts{
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  text-align: left;
  margin-left: 25px;
}
.hot_mits{
  width: 170px;
  height: 130px;
  margin-right: 25px;
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

