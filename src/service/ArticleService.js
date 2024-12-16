import matter from 'gray-matter';
import {PostService} from "./PostService.js";


/**
 * 解析 Markdown 文件的 Front Matter
 * @param {string} content - Markdown 文件内容
 * @returns {Object} 解析后的 Front Matter 和内容
 */
export const parseFrontMatter = (content) => {
    try {
        const {data: frontMatter, content: markdownContent} = matter(content);

        // 格式化日期
        if (frontMatter.date) {
            frontMatter.date = new Date(frontMatter.date);
        }

        // 确保 tags 是数组
        if (frontMatter.tags && !Array.isArray(frontMatter.tags)) {
            frontMatter.tags = [frontMatter.tags];
        }

        return {
            frontMatter,
            content: markdownContent
        };
    } catch (error) {
        console.error('解析 Front Matter 失败:', error);
        throw new Error('解析 Markdown 文件失败');
    }
}

/**
 * 从文件内容中提取摘要
 * @param {string} content - Markdown 内容
 * @param {number} [length=200] - 摘要长度
 * @returns {string} 文章摘要
 */
export const extractSummary = (content, length = 200) => {
    // 移除 Front Matter
    const {content: markdownContent} = matter(content);

    // 移除 Markdown 语法
    let plainText = markdownContent
        .replace(/---[\s\S]*?---/, '') // 移除 Front Matter
        .replace(/#+\s/g, '')          // 移除标题标记
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 将链接转换为纯文本
        .replace(/[*_~`]/g, '')        // 移除强调符号
        .replace(/\n/g, ' ')           // 将换行转换为空格
        .replace(/\s+/g, ' ')          // 将多个空格合并为一个
        .trim();

    return plainText.length > length
        ? plainText.slice(0, length) + '...'
        : plainText;
}

/**
 * 完整解析 Markdown 文件
 * @param {string} filePath - 文件路径
 * @returns {Object} 解析后的文章信息
 */
export const parseMarkdownFile = (filePath) => {
    return new Promise((resolve, reject) => {
        PostService.readLocalMarkdownFile(filePath).then(res => {
            try {
                const {frontMatter, content: markdownContent} = parseFrontMatter(res);
                resolve({
                    path: filePath,
                    title: frontMatter.title || '',
                    description: frontMatter.description || '',
                    name: frontMatter.name || '',
                    category: frontMatter.category || 'uncategorized',
                    tags: frontMatter.tags || [],
                    date: frontMatter.date || new Date(),
                    summary: extractSummary(res),
                    commentNumber: frontMatter.commentNumber || null,
                    content: markdownContent
                })
            } catch (error) {
                reject(error);
            }
        });
    });


}

/**
 * 生成 Front Matter
 * @param {Object} metadata - 文章元数据
 * @returns {string} 生成的 Front Matter
 */
export const generateFrontMatter = (metadata) => {
    try {
        const {data} = matter.stringify('', metadata);
        return data;
    } catch (error) {
        console.error('生成 Front Matter 失败:', error);
        throw new Error('生成 Front Matter 失败');
    }
}

