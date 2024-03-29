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
    })
}

export function getHomeData (data) {
    return request({
        url: '/index/index/index',
        method: 'get',
        params: data
    })
}
export function getNewsClass (data) {
    return request({
        url: '/index/news/get_categorys',
        method: 'get',
        params: data
    })
}

export function getNewsList (data) {
    return request({
        url: '/index/news/newslist',
        method: 'get',
        params: data
    })
}
export function getNewsDetail (data) {
    return request({
        url: '/index/news/newsinfo',
        method: 'get',
        params: data
    })
}

export function contactUs (data) {
    return request({
        url: '/index/contact/save',
        method: 'post',
        data
    })
}

export function getAboutUs (data) {
    return request({
        url: '/index/about/index',
        method: 'get',
        params: data
    })
}

export function getCaseArea (data) {
    return request({
        url: '/index/business/index',
        method: 'get',
        params: data
    })
}

export function getGovCloud (data) {
    return request({
        url: '/index/cloud/get_carousel',
        method: 'get',
        params: data
    })
}

export function getCaseClass (data) {
    return request({
        url: '/index/customer/get_categorys',
        method: 'get',
        params: data
    })
}
export function getCaseList (data) {
    return request({
        url: '/index/customer/caselist',
        method: 'get',
        params: data
    })
}
export function getCaseDetail (data) {
    return request({
        url: '/index/customer/caseinfo',
        method: 'get',
        params: data
    })
}
