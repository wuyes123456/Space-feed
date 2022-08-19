import request from '../utils/request'
// 登录方法
export function login() {
    return request({
        url: '/max/notice/getList',
        method: 'get',
    })
}