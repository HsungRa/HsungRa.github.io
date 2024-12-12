import { httpGet } from '../util/HttpUtil.js'
import { defineStore } from 'pinia'


export const getArticleList = (categoryCode) => {
    let url = '/api/article/list?category_code=' + categoryCode
    return httpGet(url)
}

export const getArticleDetail = (articleCode) => {
    let url = '/api/article/detail?article_code=' + articleCode
    return httpGet(url)
}

const ArticleStore = defineStore('article', {
    state: () => ({
        currentArticle: null
    }),
    actions: {
        setCurrentArticle(currentArticle) {
            this.currentArticle = currentArticle;
        }
    }
});

export const articleStore = ArticleStore()
