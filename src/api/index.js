import request from '../utils/request'
// import request from "../utils/http"
// 登录方法
export function info(params) {
    var address = {'address' : params}
    return request({
        url: '/api/v1/basic_info',
        headers: {
            isToken: false
        },
        method: 'get',
        data:params
    })
}