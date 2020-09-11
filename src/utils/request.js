import axios from 'axios'
import qs from 'qs'
import { MessageBox, Message } from 'element-ui'

const service = axios.create({
    baseURL: 'https://www.zhengshangwl.com', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
})

service.interceptors.request.use(
    config => {

        // config.headers['X-Token'] = ''
        config.data = qs.stringify(config.data)

        return config
    },
    error => {

        console.log(error) // for debug
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 1) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)
export default service































