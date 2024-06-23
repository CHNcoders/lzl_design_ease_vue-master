// 是否已经登录
export function hasLogin(){
    return window.localStorage.getItem('token')
}
