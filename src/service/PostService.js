import matter from "gray-matter";

export class PostService {

    /**
     * 从本地文件系统读取 markdown 文件
     * @param {string} filePath - 文件路径（相对于 public 目录）
     * @returns {Promise<string>} markdown 文件内容
     */
    static readLocalMarkdownFile(filePath) {
        PostService.readLocalMarkdownFile2(filePath).then(markdown => {
            console.log('>>>>>>>>>>>>>>>>>>>>>>>>readLocalMarkdownFile:',markdown);
        });

        return new Promise((resolve, reject) => {
            fetch(`/${filePath}`).then((response) => {
                if (response.ok) {
                    resolve(response.text());
                } else {
                    reject(`fetch error! status: ${response.status}`);
                }

            })
        })
    }
    static readLocalMarkdownFile2(filePath) {
        return new Promise((resolve, reject) => {
            const content = import(`/${filePath}?raw`);
            resolve(content.default)
        })
    }

    /**
     * 获取本地目录的文件树结构
     * @returns {Promise<Object>} 目录树结构
     */
    static getLocalDirectoryTree1() {
        return new Promise((resolve, reject) => {
            // 使用 Vite 的 glob 导入功能
            const files = import.meta.glob('/public/posts/**/*.md', {eager: true});
            // 创建根目录结构
            const tree = {
                name: 'posts',
                filePath: 'posts',
                posts: [],
                children: {}
            };
            // 处理所有文件路径
            for (const filePath in files) {
                // 从完整路径中提取相对路径
                const relativePath = filePath.replace('/public/posts/', '');
                const pathParts = relativePath.split('/');

                if (pathParts.length === 1) {
                    // 如果是根目录下的文件
                    tree.posts.push(pathParts[0]);
                } else {
                    // 如果是子目录中的文件
                    let currentLevel = tree.children;
                    let currentPath = 'posts';
                    for (let i = 0; i < pathParts.length - 1; i++) {
                        const part = pathParts[i];
                        currentPath = `${currentPath}/${part}`;
                        if (!currentLevel[part]) {
                            currentLevel[part] = {
                                name: part,
                                filePath: currentPath,
                                posts: [],
                                children: {}
                            };
                        }
                        if (i === pathParts.length - 2) {
                            // 最后一个目录，添加文件
                            currentLevel[part].posts.push(pathParts[pathParts.length - 1]);
                        } else {
                            currentLevel = currentLevel[part].children;
                        }
                    }
                }
            }
            // 将 children 对象转换为数组
            const convertChildrenToArray = (node) => {
                return Object.values(node.children).map(child => {
                    return {
                        ...child,
                        children: convertChildrenToArray(child)
                    };
                });
            };

            resolve({
                ...tree,
                children: convertChildrenToArray(tree)
            })
        });
    }

    /**
     * 过滤目录树，只保留指定类型的文件
     * @param {Object} tree - 目录树对象
     * @param {Array<string>} extensions - 文件扩展名数组，例如 ['.md', '.txt']
     * @returns {Object} 过滤后的目录树
     */
    static filterTree(tree, extensions) {
        const filtered = {
            name: tree.name,
            posts: tree.posts.filter(post =>
                extensions.some(ext => post.toLowerCase().endsWith(ext.toLowerCase()))
            ),
            children: tree.children.map(child => this.filterTree(child, extensions))
        };

        // 如果子目录没有符合条件的文件和子目录，则移除该子目录
        filtered.children = filtered.children.filter(child =>
            child.posts.length > 0 || child.children.length > 0
        );

        return filtered;
    }


    static async getLocalDirectoryTree() {
        try {

            const files = import.meta.glob('/public/posts/**/*.md', {
                eager: true,
                as: 'raw'  // 获取原始内容
            });

            // 创建根目录结构
            const tree = {
                name: 'posts',
                filePath: 'posts',
                posts: [],
                children: {}
            };

            for (const filePath in files) {
                const content = files[filePath];
                const relativePath = filePath.replace('/public/posts/', '');
                const pathParts = relativePath.split('/');

                // 解析文件内容，获取 frontmatter 和正文
                const {data: frontmatter, content: fileContent} = matter(content);
                // 创建文件信息对象
                const fileInfo = {
                    name: pathParts[pathParts.length - 1],
                    filePath: `posts/${relativePath}`,
                    lastModified: frontmatter.date || new Date().toISOString(), // 优先使用 frontmatter 中的日期
                    summary: this.generateSummary(fileContent)
                };
                if (pathParts.length === 1) {
                    // 根目录下的文件
                    tree.posts.push(fileInfo);
                } else {
                    // 子目录中的文件
                    let currentLevel = tree.children;
                    let currentPath = 'posts';

                    for (let i = 0; i < pathParts.length - 1; i++) {
                        const part = pathParts[i];
                        currentPath = `${currentPath}/${part}`;
                        if (!currentLevel[part]) {
                            currentLevel[part] = {
                                name: part,
                                filePath: currentPath,
                                posts: [],
                                children: {}
                            };
                        }
                        if (i === pathParts.length - 2) {
                            // 最后一个目录，添加文件
                            currentLevel[part].posts.push(fileInfo);
                        } else {
                            currentLevel = currentLevel[part].children;
                        }
                    }
                }
            }

            // 将 children 对象转换为数组
            const convertChildrenToArray = (node) => {
                return Object.values(node.children).map(child => {
                    return {
                        ...child,
                        children: convertChildrenToArray(child)
                    };
                });
            };

            return {
                ...tree,
                children: convertChildrenToArray(tree)
            };
        } catch (error) {
            console.error('获取本地目录树失败:', error);
            throw new Error('无法获取目录树');
        }
    }

    /**
     * 生成文章摘要
     * @param {string} content - 文章内容
     * @param {number} length - 摘要长度，默认200字符
     * @returns {string} 文章摘要
     */
    static generateSummary(content, length = 200) {
        // 移除 Markdown 语法
        let plainText = content
            .replace(/#+\s/g, '')  // 移除标题
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // 将链接转换为纯文本
            .replace(/[*_~`]/g, '')  // 移除强调符号
            .replace(/\n/g, ' ')  // 将换行转换为空格
            .replace(/\s+/g, ' ')  // 将多个空格合并为一个
            .trim();

        // 截取指定长度
        return plainText.length > length
            ? plainText.slice(0, length) + '...'
            : plainText;
    }

    static async getLocalDirectoryTree3() {
        try {

            const files = import.meta.glob('/public/posts/**/*.md', {
                eager: true,
                as: 'raw'  // 获取原始内容
            });

            // 创建根目录结构
            const tree = {
                name: 'posts',
                filePath: 'posts',
                posts: [],
                children: {}
            };

            for (const filePath in files) {
                const relativePath = filePath.replace('/public/posts/', '');
                const pathParts = relativePath.split('/');
                // 解析文件内容，获取 frontmatter 和正文
                const content = files[filePath];
                const {data: frontMatter, content: markdownContent} = matter(content);
                // 创建文件信息对象

                if (pathParts.length === 1) {
                    tree.posts.push({
                        name: pathParts[pathParts.length - 1],
                        filePath: `posts/${relativePath}`,
                        matter: frontMatter,
                        content: markdownContent
                    });
                } else {
                    let currentLevel = tree.children;
                    let currentPath = 'posts';

                    for (let i = 0; i < pathParts.length - 1; i++) {
                        const part = pathParts[i];
                        currentPath = `${currentPath}/${part}`;
                        if (!currentLevel[part]) {
                            currentLevel[part] = {
                                name: part,
                                filePath: currentPath,
                                posts: [],
                                children: {}
                            };
                        }
                        if (i === pathParts.length - 2) {
                            // 最后一个目录，添加文件
                            currentLevel[part].posts.push({
                                name: pathParts[pathParts.length - 1],
                                filePath: `posts/${relativePath}`,
                                matter: frontMatter,
                                content: markdownContent
                            });
                        } else {
                            currentLevel = currentLevel[part].children;
                        }
                    }
                }
            }

            // 将 children 对象转换为数组
            const convertChildrenToArray = (node) => {
                return Object.values(node.children).map(child => {
                    return {
                        ...child,
                        children: convertChildrenToArray(child)
                    };
                });
            };

            return {
                ...tree,
                children: convertChildrenToArray(tree)
            };
        } catch (error) {
            console.error('获取本地目录树失败:', error);
            throw new Error('无法获取目录树');
        }
    }

}


