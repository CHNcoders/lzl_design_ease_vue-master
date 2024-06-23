<script setup>
import { ref } from "vue";


const tabs=ref([
    {
        index:0,
        name:'全部'
    },
    {
        index:1,
        name:'待付款'
    },
    {
        index:2,
        name:'待收货'
    },
    {
        index:3,
        name:'已完成'
    },
    {
        index:4,
        name:'已取消'
    },
    {
        index:5,
        name:'已退款'
    }
])
const currentIndex=ref(0)
const clickTab=(id)=>{
  currentIndex.value=id
}
const productslist=ref([
  {
    id:1,
    spot:'M&G晨光文创工厂',
    imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
  {
    id:2,
    spot:'M&G晨光文创工厂',
     imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
  {
    id:3,
    spot:'M&G晨光文创工厂',
     imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
  {
    id:4,
    spot:'M&G晨光文创工厂',
    imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
  {
    id:5,
    spot:'M&G晨光文创工厂',
     imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
  {
    id:6,
    spot:'M&G晨光文创工厂',
     imgtho:require('@/assets/orderimg.png'),
    img:require('@/assets/rom.png'),
    name:'旅顺国潮钥匙扣 琳琅工艺',
    price:'￥160.00',
    store:3,
    band:'晨光礼品工艺',
    weight:'28g',
    size:'35*95(mm)',
    material:'铝合金',
    colortype:'CWTY',
    productid:'110881'
  },
])
</script>


<template>
    <div class="personorder">
        <div class="tab">
          <h1 class="fntone">我的订单</h1>
          <div class="tab_r">
            <input type="text" v-model="search" placeholder="搜索...">
            <img style="width:20px;height:20px;" src="@/assets/searchtab.png" alt="">
        </div>
        </div>

         <div class="content">
            <div class="link">
              <span style="color:#000;" :class="index===currentIndex ? 'active' : ''" v-for="(item, index) in tabs" :key="index" @click="clickTab(index)">{{ item.name }}</span>
            </div>

            <div class="itemall">

               <div class="item" v-for="(item,index) in productslist" :key="index">

                 <div class="item_top">
                    <div class="top_left">
                      <img :src="item.img" style="margin-left:5px;" alt="">
                       <span style="margin-left:8px;">{{item.spot}}</span>
                       <span style="margin-left:8px;">></span>
                    </div>
                    <div class="top_right">完成</div>
                 </div>

                 <div class="item_content">
                    <div class="mage">
                      <img :src="item.imgtho" alt="">
                    </div>
                    <div class="detail">
                      <div class="detail_top">
                        <span class="name">{{item.name}}</span>
                        <span class="price">{{item.price}}</span>
                      </div>
                      <div class="pm" style="text-align:left;margin-top: 10px;">
                        <span>参数:</span>
                      </div>
                      <div class="detail_content">
                         
                        <div class="i_left">
                         
                          <span>品牌:{{item.band}}</span>
                          <span>毛重:{{item.weight}}</span>
                          <span>尺寸:{{item.size}}</span>
                        </div>
                        <div class="i_right" style="margin-left:30px;">
                          <span>材质:{{item.material}}</span>
                          <span>颜色分类:{{item.colortype}}</span>
                          <span>货号:{{item.productid}}</span>
                        </div>
                      </div>
                    </div>
                 </div>

                 <div class="item_btm">
                     <span class="more">更多</span>
                     <div class="btn_list">
                      <!-- <button class="one">退换/售后</button>
                      <button class="two">再次购买</button> -->
                      <el-button class="one">退换/售后</el-button>
                      <el-button class="two">再次购买</el-button>
                     </div>
                 </div>
               </div>
            </div>
         </div>
        <span class="rad">?</span>
    </div>
</template>
<style scoped>
.el-link{
    --el-link-hover-text-color:#A500FE;
    margin-right: 10px;
    font-size: 13px;
    font-weight: bold;
}
.active{
  border-bottom: 2px solid #A500FE;
  
}

.personorder{
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
.rad{
  width: 40px;
  height: 40px;
  color: #fff;
  background: #A500FE;
  position: absolute;
  bottom: -80px;
  right: 10px;
  border-radius: 50%;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;
}
.content{
    margin-left: 25px;
}
.link{
  display: flex;
  flex-direction: row;
  align-items: left;
  font-weight: bold;
}
.link span{
    margin-right: 10px;
    font-size: 13px;
    font-weight: bold;
}
.itemall{
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.item{
  width: 554px;
  height: 241px;
  box-shadow: 2px 1px 2px 2px rgba(0,0,0,0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-right: 40px;
  margin-bottom: 35px;
}
.item_top{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  color: #000000;
}
.top_left{
  font-size: 16px;
  line-height: 16px;
}
.top_left img{
  width: 15px;
  height: 15px;
  /* margin: 7px 10px; */
}
.top_right{
  color: #A500FE;
  font-size: 14px;
  line-height: 14px;
}
.item_content{
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  margin-top: 10px;
  margin-left: 15px;
}
.mage{
  width: 118px;
  height: 118px;
  border-radius: 20px;
}
.mage img{
  width: 118px;
  height: 118px;
}
.detail{
  margin-left: 20px;
}
.detail_top{
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  justify-content: space-between;
  position: relative;
}
.detail_top .name{
  font-size: 16px;
  font-weight:bold;
  line-height: 16px;
}
.detail_top .price{
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  position: absolute;
  right: -106px;
}
.detail_top span{
  display: block;
}
.detail_content{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
/* .detail_content .i{
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;
  justify-content: space-between;
} */
.i_left ,.i_right{
  display: flex;
  flex-direction: column;
  /* margin-left: 15px; */
  text-align: left;
}
.i_left span{
  margin-top: 7px;
}
.i_right span{
  margin-top: 7px;
}
.item_btm{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  /* margin-bottom: 5px; */
  margin-top: 17px;
}
.more{
  color: #A500FE;
  font-size: 16px;
  line-height: 16px;
  margin-left: 10px;
}
.btn_list button{
  width: 105px;
  height: 35px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
}
.btn_list{
  margin-right: 10px;
}
.one{
  border: 1px solid #A500FE;
  color: #000000;
}
.two{
  background: #A500FE;
  color: #fff;
}
</style>