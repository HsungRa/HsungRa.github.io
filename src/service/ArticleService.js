import { httpGet } from '../util/HttpUtil.js'


export const getArticleList = (categoryCode) => {
    let url = '/api/article/list?category_code=' + categoryCode
    return httpGet(url)
}

export const getArticleDetail = (articleCode) => {
    let url = '/api/article/detail?article_code=' + articleCode
    return httpGet(url)
}

