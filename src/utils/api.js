import request from './request'

export function getTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'get',
        params: data
    })
}

export function postTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'post',
        data
    })
}
// export function postTest (data) {
//     return request({
//         url: '/sys/user/login',
//         method: 'post',
//         data
//     })
// }

// 底部信息
export function bottomInfoapi (data) {
    return request({
        url: '/index/footer/get_config',
        method: 'get',
        params: data
    })
}
