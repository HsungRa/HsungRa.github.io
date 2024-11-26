import axios from 'axios';
import qs from 'qs'

// 创建axios实例
const axios_service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // API的基础URL
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
                          responseType
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


export const httpGet = (url, data) => {
    return axios_client({
        url: url,
        method: 'get',
        data,
    })
}
export const httpPost = (url, data) => {
    return axios_client({
        url: url,
        method: 'post',
        data,
    })
}
export const httpPut = (url, data) => {
    return axios_client({
        url: url,
        method: 'put',
        data
    })
}

export const httpDelete = (url, data) => {
    return axios_client({
        url: url,
        method: 'delete',
        data
    })
}

export const httpPostImage = (url, data, params) => {
    if (params) {
        const list = []
        for (const [key, value] of Object.entries(params)) {
            list.push(`${key}=${value}`)
        }
        url = `${url}?${list.join('&')}`
    }
    return axios_client({
        url: url,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}
export const httpGetImage = (url, data) => {
    return axios_client({
        url: url,
        method: 'get',
        headers: {
            'Content-Type': 'application/octet-stream'
        },
        responseType: 'blob',
        data
    })
}

export const httpPostFile = (url, data) => {
    return axios_client({
        url: url,
        method: 'post',
        responseType: 'blob',
        data
    })
}
export const httpMutiPartFormDataPost = (url, data) => {
    return axios_client({
        method: 'post',
        url: url,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}





