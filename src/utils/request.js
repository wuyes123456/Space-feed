import axios from 'axios'
import store from '../store'
import errorCode from '../utils/errorCode'
import {Dialog, Toast} from "vant";

// 是否显示重新登录
export let isRelogin = { show: false };
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_HOST,
    // 超时
    timeout: 20000
})

// request拦截器
service.interceptors.request.use(config => {
    // 是否需要防止数据重复提交
    const isRepeatSubmit = (config.headers || {}).repeatSubmit === false
    // get请求映射params参数

    if (config.method === 'get') {
        let url = config.url + '?';
        url = url.slice(0, -1);
        config.url = url;
        console.log(url)

    }
    if (!isRepeatSubmit && (config.method === 'post' || config.method === 'put')) {
        const requestObj = {
            url: config.url,
            data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
            time: new Date().getTime()
        }
    }
    console.log(config)
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
        console.log(res)
        // 未设置状态码则默认成功状态
        const code = res.data.code || 200;
        // 获取错误信息
        const msg = errorCode[code] || res.data.msg || errorCode['default']
        // 二进制数据则直接返回
        if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
            return res.data
        }
        if (code === 401) {
            if (!isRelogin.show) {
                isRelogin.show = true;
                Dialog.confirm({
                    title: '系统提示',
                    message: '登录状态已过期，您可以继续留在该页面，或者重新登录',
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                    .then(() => {
                        // on confirm
                        isRelogin.show = false;
                        store.dispatch('user/LogOut').then(() => {
                            location.href = '/';
                        })
                    })
                    .catch(() => {
                        // on cancel
                        isRelogin.show = false;
                    });
            }
            return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
        } else if (code === 500) {
            Toast({ type: 'fail', duration: 1000, message: msg });
            return Promise.reject(new Error(msg))
        } else if (code !== 200) {
            Toast({ type: 'fail', duration: 1000, message: msg });
            return Promise.reject('error')
        } else {
            return res.data
        }
    },
    error => {
        console.log('err' + error)
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        }
        else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        }
        else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }

        Toast({ type: 'fail', duration: 5 * 1000, message: message });
        return Promise.reject(error)
    }
)

export default service
