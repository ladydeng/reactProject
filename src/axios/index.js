import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config"
 
const instance = axios.create({
    timeout: TIMEOUT,
    baseURL: BASE_URL // 根据自己配置的反向代理去设置不同环境的baseUrl
})
instance.defaults.headers.post['Content-Type'] = 'application/json'
 
/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    var token = localStorage.getItem("token")
    if (token) {
        config.headers['token'] = token
    }
	// 如果还需要在请求头内添加其他内容可以自己添加
    // config.headers['api'] = api
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})
 
/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data)
    }
}, error => {
    if (error.response) {
		// 如401我就让用户返回登录页
        if (error.response.status === 401) {
            this.props.history.push('/login');
        }
        return Promise.reject(error)
    } else {
        return Promise.reject('请求超时, 请刷新重试')
    }
})

export default instance