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
