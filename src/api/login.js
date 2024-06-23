import {request } from '@/plugins/request'

// 短信验证码
export const getCode =(phone) => {
   return request({
    url:'/api/user/sms',
    method:'POST',
    data:{
        phone
    }
   })
};

//手机号登录
export const getLogin=(phone,code)=>{
    return request({
        url:'/api/user/login',
        method:'POST',
        data:{
           phone:phone,
           code:code
        }
    })
}

//获取二维码
export const getWxLogin=()=>{
    return request({
        url:'/api/user/wxLogin',
        method:'GET'
    })
}