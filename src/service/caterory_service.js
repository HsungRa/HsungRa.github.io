import { httpGet } from '../util/http_util.js'


export const getCategoryList = (subcategoryCode) => {
    let url = '/api/category/list'
    if (subcategoryCode) {
        url = `${url}?parent_code=${subcategoryCode}`
    }
    return httpGet(url)
}



