import axios from "axios";
export function request(config) {
    const instance = axios.create({
        baseURL:'http://115.159.84.201:8080',
        timeout: 5000,
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        // 设置允许跨域的域名和请求方法
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
        // 如果有一个接口需要认证才能访问，就在这里统一设置
        const token = window.localStorage.getItem('token')

        if (token){
            config.headers.token = token
        }
        // 直接放行
        return config
    }, error => {
        console.log(error)
    })

    // 相应拦截
    instance.interceptors.response.use(res => {
        return res.data ? res.data : res
    }, error => {
        console.log(error)
    })
    return instance(config)
}
