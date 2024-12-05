import axios from 'axios';
import qs from 'qs'

// 创建axios实例
const axios_service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // API的基础URL
    baseURL: '',
    timeout: 5000 // 请求超时时间
});
axios_service.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截器
axios_service.interceptors.request.use(
    config => {
        // 在这里可以添加一些请求前的操作，例如添加token
        //config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        //config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    error => {
        // 请求错误处理
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

axios_service.interceptors.response.use(
    response => {
        // 假设服务器返回的数据格式为JSON，且包含data字段
        const data = response.data;
        // 可以根据需要对数据进行转换或处理
        return data;
    },
    error => {
        // 响应错误处理
        // 例如，如果响应状态码为401（未授权），则可能需要重新登录
        if (error.response && error.response.status === 401) {
            // 重定向到登录页面
            router.push('/login');
        }
        // 如果响应状态码为429（请求过多），则可以进行错误重试
        if (error.response && error.response.status === 429) {
            // 重试逻辑
            console.log('Request was rate limited, retrying...');
            // 可以在这里实现重试逻辑，例如使用递归调用或使用第三方库
        }
        return Promise.reject(error);
        //这行代码的意思是返回一个被拒绝的Promise对象，并将error作为拒绝的原因
    }
);

const axios_client = ({
                          method,
                          url,
                          data,
                          headers,
                          responseType,
                      }) => {
    const config = {}
    if (headers) {
        config.headers = headers
    }
    if (responseType) {
        config.responseType = responseType
    }
    method = method.toLowerCase()
    if (method === 'post') {
        return axios_service.post(url, data, config)
    } else if (method === 'get') {
        config.params = data
        config.paramsSerializer = (params) => {
            return qs.stringify(params, {indices: false})
        }
        return axios_service.get(url, config)
    } else if (method === 'delete') {
        return axios_service.delete(url, {
            data: data
        })
    } else if (method === 'put') {
        return axios_service.put(url, data, config)
    } else {
        console.error('未知的method' + method)
        return false
    }
}

export const httpGet = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    return axios_client({
        url: url,
        method: 'get',
        data: data,
        headers: headers
    })
}
export const httpPost = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    return axios_client({
        url: url,
        method: 'post',
        data: data,
        headers: headers
    })
}
export const httpPut = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    return axios_client({
        url: url,
        method: 'put',
        data: data,
        headers: headers
    })
}

export const httpDelete = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    return axios_client({
        url: url,
        method: 'delete',
        data: data,
        headers: headers
    })
}

export const httpPostImage = (url, data, params, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    if (params) {
        const list = []
        for (const [key, value] of Object.entries(params)) {
            list.push(`${key}=${value}`)
        }
        url = `${url}?${list.join('&')}`
    }
    if (headers){
        headers['Content-Type'] = 'multipart/form-data'
    }else {
        headers = {
            'Content-Type': 'multipart/form-data'
        }
    }
    return axios_client({
        url: url,
        method: 'post',
        headers: headers,
        data
    })
}
export const httpGetImage = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    if (headers){
        headers['Content-Type'] = 'application/octet-stream'
    }else {
        headers = {
            'Content-Type': 'application/octet-stream'
        }
    }
    return axios_client({
        url: url,
        method: 'get',
        headers: headers,
        responseType: 'blob',
        data
    })
}

export const httpPostFile = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }

    return axios_client({
        url: url,
        method: 'post',
        responseType: 'blob',
        data,
        headers:headers
    })
}
export const httpMutiPartFormDataPost = (url, data, headers = null, baseURL = '/api') => {
    if (baseURL!=null && baseURL.trim()!=='') {
        url = `${baseURL}${url}`
    }
    if (headers){
        headers['Content-Type'] = 'multipart/form-data'
    }else {
        headers = {
            'Content-Type': 'multipart/form-data'
        }
    }
    return axios_client({
        method: 'post',
        url: url,
        headers: headers,
        data
    })
}





