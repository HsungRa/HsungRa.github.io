import { httpGet } from '../util/HttpUtil.js'


export const getCategoryList = (subcategoryCode) => {
    let url = '/api/category/list'
    if (subcategoryCode) {
        url = `${url}?parent_code=${subcategoryCode}`
    }
    return httpGet(url)
}



