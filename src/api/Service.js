import {request} from '../utils/request'
export function getConfigsByProductId(productId) {
    return request({
        url: '/manager/getConfigsByProductId',
        params: { productId: productId }
    })
}
export function getAllAndroidPlugins() {
    return request({
        url: '/manager/getAndroidPlugin ',
        method: 'get'
    })
}
export function addNewAndroidPlugin(data) {
    return request({
        url: '/manager/addAndroidPlguin',
        data: JSON.stringify(data)
    })
}
