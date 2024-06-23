<template>

        <div class="login">

        <div class="wxlogin" v-if="wxlogin">

        <div class="wxlogin_left">

            <div class="lefttop">
                <div class="line">
                <img src="../assets/紫色logo.png" alt="">
                <span class="one">灵制</span>
                </div>
            </div>

           <div class="leftcenter">
            <span class="mm">微信扫码快速登录</span>
            <span class="mt">未注册的微信号将自动创建灵制账号</span>
            <div class="image" id="login_container">

            </div>
            <span class="change" @click="changephone()">切换成手机号登录 > </span>
           </div>

            <div class="right_list">

            <div class="listitem">
              <img src="../assets/wx.png" alt="">
              <span class="wxlogin">微信登录</span>
            </div>

            <div class="listitem">
              <span class="numlogin">手机号登录</span>
            </div>

           </div>

        </div>


        <div class="wxlogin_right">
          <span class="delete" @click="backto()">
            <img src="../assets/删除.png" alt="">
            </span>
          <div class="wx_form">
            <div class="formone">
              <input type="text" placeholder="请输入微信号..." v-model="phonenumber">
            </div>
              <div class="formtwo">
                <input type="password" placeholder="请输入密码" v-model="password">
              </div>
             <div class="formthree">
              <button>注册/登录</button>

              <p>
               <input type="checkbox" name="" id="">
                我同意 <span class="purpol">用户服务协议</span> 、<span class="purpol">隐私政策</span>和<span class="purpol">授权许可协议</span>
              </p>

             </div>

          </div>
          <span class="question">?</span>
        </div>
     </div>

       <div class="phonelogin" v-else>

        <div class="phone_left">

            <div class="lefttop">
                <div class="line">
                <img src="../assets/白色logo.png" alt="">
                <span class="one">灵制</span>
                </div>
                <span class="two">LINGMAKEY</span>
            </div>
            <div class="leftitem" v-for="(item,index) in data" :key="index">
                <span class="circl"></span>
                <span>{{item.msg}}</span>
            </div>
        </div>

        <div class="phone_right">
           <span class="delete" @click="backto()">
            <img src="../assets/删除.png" alt="">
            </span>

           <div class="right_form">
            <div class="formone">
              <!-- <span>+86 </span> -->
              <select name="" id="myarea" v-model="myarea">
                <option value="">+86</option>
              </select>
              <input type="text" v-model="phonenumber" @blur="validatephone()">
              <!-- <p v-if="errorMessage" style="color: red; margin-top:2px;font-size:10px;">{{ errorMessage }}</p> -->
            </div>

            <div class="formtwo">
              <input type="text" placeholder="请输入验证码" v-model="code">
             <button class="codebtn" @click="postcode()" :disabled="isbtn">{{ iscode ? msgcount + 's' : btnmsg }}</button>
            </div>
             <span class="postcode">收不到验证码?</span>

             <div class="formthree">
              <button :disabled="islogin" @click="LoginGo()">注册/登录</button>

              <p>
               <input type="checkbox" name="" id="" v-model="ischeck">
                我同意 <span class="purpol">用户服务协议</span> 、<span class="purpol">隐私政策</span>和<span class="purpol">授权许可协议</span>
              </p>

             </div>

           </div>

           <div class="right_list">

            <div class="listitem" @click="wxGo()">
              <img src="../assets/wx.png" alt="">
              <span class="wxlogin">微信登录</span>
            </div>

            <div class="listitem">
              <span class="numlogin">手机号登录</span>
            </div>

           </div>
           <span class="question">?</span>
        </div>
       </div>




    </div>


</template>
<script>
import {ElMessage} from 'element-plus'
import {getCode, getLogin, getWxLogin} from '@/api/login'
import {nextTick} from "vue";

export default{
  data(){
    return{
      data:[
         {
    id:1,
    msg:'精选模板 每日更新'
  },
  {
    id:2,
    msg:' A I 创作 专注灵感'
  },
  {
    id:3,
    msg:'千万样机 效果直出'
  },
  {
    id:4,
    msg:'厂家合作 一件生产'
  },
  {
    id:5,
    msg:'多端同步 支持创作'
  }
      ],
    btnmsg:'获取验证码',
    msgcount:60,
    iscode:false,
    isbtn:true,
    myarea:'',
    phonenumber:'',
    code:'',
    img:'',
    msg:'退出',
    wxlogin:false,
    ischeck:'',
    password:'',
    islogin:false
    }
  },
  computed:{

  },
  watch: {
    wxlogin(newValue) {
      if (newValue) {
        this.loadWxLogin();
      }
    }
  },
  methods:{
    loadWxLogin() {
      if (typeof window.WxLogin !== 'undefined') {
        this.initWxLogin();
      } else {
        const script = document.createElement('script');
        script.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js';
        script.onload = () => {
          this.initWxLogin();
        };
        document.head.appendChild(script);
      }
    },
    async initWxLogin() {
      await nextTick();  // 确保 DOM 渲染完成
      const result = await getWxLogin();
      const {url} = result.data;
      const parsedUrl = new URL(url);
      const params = new URLSearchParams(parsedUrl.search);
      this.getUrl()
      new window.WxLogin({
        self_redirect: false,
        id: 'login_container',
        appid: 'wx718757fd98dd6ac4',
        scope: 'snsapi_login',
        redirect_uri:params.get('redirect_uri'),
        state: params.get('state'),
        style: 'black',
        href:'data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7d2lkdGg6IDEyMnB4OyBtYXJnaW4tdG9wOiAxNDVweDt9Ci5pbXBvd2VyQm94IC50aXRsZSB7ZGlzcGxheTogbm9uZTt9Ci5pbXBvd2VyQm94IC5pbmZvIHt3aWR0aDogMTIycHg7ZGlzcGxheTogbm9uZTt9Ci5zdGF0dXNfaWNvbiB7ZGlzcGxheTogbm9uZX0KLmltcG93ZXJCb3ggLnN0YXR1cyB7dGV4dC1hbGlnbjogY2VudGVyO30g',
      });

    },
    getUrl(){
      console.log(window.location.href)
     const urlParams = new URLSearchParams(window.location.href);
     console.log(urlParams)
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    console.log(code)
    console.log(state)
    },
    backto(){
      this.$emit('backto',this.msg)
    },
    wxGo(){
      this.wxlogin=true
    },
    changephone(){
      this.wxlogin=false
    },
    validatephone(){
      console.log(this.phonenumber)
      console.log(this.code)
      const phoneNumberRegex = /^1\d{10}$/;

      if (!this.phonenumber) {
        ElMessage.error('请输入手机号码')

      } else if (!phoneNumberRegex.test(this.phonenumber)) {
        ElMessage({
          message:'请输入有效的手机号码',
          type:'warning'
        })

      } else {
         this.isbtn=false
        // 执行手机号码验证成功后的逻辑
        // 例如提交表单、发送验证码等

      }
    },
    delCount(){
      if(this.msgcount>=0){
        this.iscode=true;
        this.isbtn=true;
        let originalmsgCount=this.msgcount;
        const timer=setInterval(()=>{
          this.msgcount--;
          if(this.msgcount===0){
            clearInterval(timer);
            this.msgcount=originalmsgCount;
            this.isbtn=false;
            this.iscode=false
          }
        },1000)
      }
    },
    async postcode(){
        this.delCount()
        // const phone=JSON.stringify(this.phonenumber)
        // console.log(phone)
        const code=await getCode(this.phonenumber)
        console.log(code)
        if(this.code===code){
          this.islogin=true
        }else{
          ElMessage.error('验证码错误!')
          this.islogin=false
        }
    },
    async LoginGo(){
      console.log(this.ischeck)
      if(this.ischeck){
        console.log(this.phonenumber)
        console.log(this.code)
        const data=await getLogin(this.phonenumber,this.code)
        window.localStorage.setItem('token',data.msg)
        ElMessage({
          message:'注册成功!',
           type: 'success',
           plain: true,
        })
        this.backto()
        }else{
          ElMessage({
            message:'请勾选隐私条例',
            type:'warning',
            plain:true
          })
        }
    }


  }
}

</script>

<style scoped>
/* .wxlogin .image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100px; /* 确保二维码容器的宽度 */
  /* height: 100px; 确保二维码容器的高度 */
/* }  */

.wxlogin_left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leftcenter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mask{
  width: 100vw;
  height: 100vh;
  background-color: #d9d9d9;
}
.login{
    width: 852px;
    height: 547px;
    border-radius: 20px;
    background-color: #fff;
}
.phonelogin{
    display: flex;
    flex-direction: row;
}
.phone_left{
    /* padding-top: 35px; */
    /* padding-left: 20px; */
    background: url('../assets/login.png');
    width: 348px;
    height: 547px;
    border-bottom-left-radius: 20px;

}
.phone_left img{
    width: 56px;
    height: 67px;

}
.phone_left .one{
    color: #fff;
    font-size: 36px;
    margin-left: 8px;
     letter-spacing:5px;
}
.phone_left .two{
    color: #fff;
    font-size: 24px;
    /* letter-spacing:5px; */
    line-height: 24px;
}
.lefttop{
    margin-top: 30px;
    margin-right: 20px;
}
.line{
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
}
.leftitem{
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  text-align: left;
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  padding-left: 70px;
  /* letter-spacing: 5px; */
  /* font-weight: bold; */
}
.leftitem .circl{
    background-color: #fff;
    border-radius: 50%;
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.phone_right{
  background-color: #e9e9e9;
  width: 504px;
  height: 547px;
  display: flex;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.delete{
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
}
.delete img{
  width: 40px;
  height: 40px;
  display: block;
}
.question{
  display: block;
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c6c6c6;
  color: #818181;
  font-size: 24px;
  line-height: 40px;
  /* border: 1px solid #818181; */
  /* box-shadow: 1px 1px 1px 1px #818181; */
}
.right_form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.formone,
.formtwo{
  width: 330px;
  height: 61px;
  border-radius: 12px;
  border: 1px solid #a1a1a1;
  background-color: #fff;
}
.right_form select{
  height: 100%;
  border: none;
  outline: none;
}
.formone input{
   width: 260px;
  height: 90%;
  outline: none;
  border: none;
  overflow: hidden;
}
.formtwo input{
  width: 260px;
  height: 90%;
  outline: none;
  border: none;
  overflow: hidden;
}
.formone{
  margin-bottom: 20px;
}
.formtwo{
  position: relative;
}
.codebtn {
  width: 121px;
  height: 34px;
  border-radius: 8px;
  color: #fff;
  background-color: #CA73FD;
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 16px;
  line-height: 34px; /* 设置与高度相同的 line-height 值 */
  text-align: center;
  border: none;

}
.postcode{
  position: absolute;
  right: 90px;
  font-size: 12px;
  top: 269px;
}
.formthree{
  margin-top: 40px;
}
.formthree button{
  width: 330px;
  height: 41px;
   border-radius: 12px;
  border: 1px solid #a1a1a1;
  background-color: #CA73FD;
  color: #fff;
}
.formthree p{
  font-size: 13px;
}
.purpol{
  color: #CA73FD;
}
.right_list{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.right_list .listitem{
  width: 130px;
  height: 36px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  line-height: 36px ;
  color: #a1a1a1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  text-align: center;
  line-height: 36px;
}
.wxlogin{
  font-size: 14px;
  line-height: 36px;
  margin-left: 8px;
}
.numlogin{
  font-size: 14px;
  line-height: 36px;
  margin-left: 20px;
}
.listitem img{
  width: 25px;
  height: 23px;
  display: block;
  margin-left: 10px;
}
/* 微信 */
.wxlogin .one{
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 10px;

}
.wxlogin{
  display: flex;
  flex-direction: row;
}
.wxlogin .wxlogin_left{
    width: 348px;
    height: 547px;
    border-bottom-left-radius: 20px;
}
.leftcenter{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 60px;
}
.wxlogin .mm{
  font-size: 24px;
  font-weight: bold;
  color: #08C160;
}
.wxlogin .mt{
  font-size: 14px;
  color: #a1a1a1;
}
.wxlogin .image{
  width: 100px;
  height: 100px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* .image img{
  width: 122px;
  height: 122px;
  display: block;
} */
.wxlogin .change{
  color: #08C160;
  font-size: 18px;
  margin-top: 25px;
}
.wxlogin_right{
  background-color: #e9e9e9;
  width: 504px;
  height: 547px;
  display: flex;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.delete{
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
}
.delete img{
  width: 40px;
  height: 40px;
  display: block;
}
.question{
  display: block;
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c6c6c6;
  color: #818181;
  font-size: 24px;
  line-height: 40px;
  /* border: 1px solid #818181; */
  /* box-shadow: 1px 1px 1px 1px #818181; */
}
.wx_form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
/* 微信 */
.impowerBox .qrcode {
  width: 122px;

}
.impowerBox .title{
  display: none;
}
</style>