// service/AnalyticsService.js
import { useGtag } from 'vue-gtag-next'

export const analyticsService = {
    // 跟踪页面访问
    trackPageView(pageName, pageParams = {}) {
        const { event } = useGtag()
        event('page_view', {
            page_name: pageName,
            ...pageParams
        })
    },

    // 跟踪文章阅读
    trackArticleView(articleId, articleTitle) {
        const { event } = useGtag()
        event('article_reading', {
            article_id: articleId,
            article_title: articleTitle,
        })
    },

    // 跟踪用户行为
    trackUserAction(actionName, actionParams = {}) {
        const { event } = useGtag()
        event(actionName, {
            timestamp: new Date().toISOString(),
            ...actionParams
        })
    },

    // 跟踪阅读时间
    startTrackingReadTime(articleId) {
        const startTime = Date.now()
        return () => {
            const { event } = useGtag()
            const readTime = Math.round((Date.now() - startTime) / 1000)
            event('reading_time', {
                article_id: articleId,
                time_seconds: readTime
            })
        }
    }
}
