import {httpGet} from '../util/HttpUtil.js'
import {get} from "../util/StorageUtil.js";

const config = (token) => {
    return {
        Authorization: `Bearer ${token}`,
    }
};

export class TestPostService {
    /**
     * 从指定的 GitHub 仓库读取 markdown 文件内容
     * @param {string} owner - 仓库所有者
     * @param {string} repo - 仓库名称
     * @param {string} path - 文件路径
     * @param {string} branch - 分支名称，默认为 'main'
     * @returns {Promise<string>} markdown 文件内容
     */
    static readMarkdownFile(owner, repo, path, branch = 'main') {
        // 构建 GitHub API URL
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
        const commentBy = JSON.parse(get('auth_user'));
        return new Promise((resolve, reject) => {
            httpGet(url, null, config(commentBy.accessToken), '').then((data) => {
                // GitHub API 返回的内容是 Base64 编码的
                const content = Buffer.from(data.content, 'base64').toString('utf-8');
                resolve(content);
            })
        });
    }

    /**
     * 从本地文件系统读取 markdown 文件
     * @param {string} filePath - 文件路径（相对于 public 目录）
     * @returns {Promise<string>} markdown 文件内容
     */
    static readLocalMarkdownFile(filePath) {
        return new Promise((resolve, reject) => {
            // `/public/${filePath}?raw`
            // import(`/public/${filePath}?raw`).then((content) => {
            //     resolve(content.default);
            // });
            fetch(`/${filePath}`).then((response) => {
                if (response.ok) {
                    resolve(response.text());
                } else {
                    reject(`fetch error! status: ${response.status}`);
                }

            })
        })
    }


    /**
     * 获取指定 GitHub 仓库目录的文件树结构
     * @param {string} owner - 仓库所有者
     * @param {string} repo - 仓库名称
     * @param {string} path - 起始路径，默认为根目录
     * @param {string} branch - 分支名称，默认为 'main'
     * @returns {Promise<Object>} 目录树结构
     */
    static getDirectoryTree(owner, repo, path = '', branch = 'main') {
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
        const commentBy = JSON.parse(get('auth_user'));
        return new Promise((resolve, reject) => {
            httpGet(url, null, config(commentBy.accessToken), '').then((data) => {
                // 创建当前目录的结构
                const result = {
                    name: path || 'root',
                    posts: [],
                    children: []
                };

                // 遍历响应内容
                for (const item of data) {
                    if (item.type === 'file') {
                        // 如果是文件，添加到 posts 数组
                        result.posts.push(item.name);
                    } else if (item.type === 'dir') {
                        // 如果是目录，递归获取子目录结构
                        const subPath = path ? `${path}/${item.name}` : item.name;
                        this.getDirectoryTree(owner, repo, subPath, branch).then((subTree) => {
                            result.children.push(subTree);
                        });
                    }
                }
                resolve(result);
            }).catch((reason) => {
                reject(new Error(reason || "Unknown error occurred."));
            })

        });
    }


    /**
     * 获取本地目录的文件树结构（需要后端支持）
     * @param {string} basePath - 基础路径
     * @returns {Promise<Object>} 目录树结构
     */
    static getLocalDirectoryTree1(basePath) {
        return new Promise((resolve, reject) => {
            fetch(`/api/directory-tree?path=${encodeURIComponent(basePath)}`).then((response) => {
                if (response.ok) {
                    resolve(response.json());
                }else {
                    reject(`fetch error! status: ${response.status}`);
                }
            })
        });
    }


    /**
     * 获取本地目录的文件树结构
     * @returns {Promise<Object>} 目录树结构
     */
    static getLocalDirectoryTree() {
        return new Promise((resolve, reject) => {
            // 使用 Vite 的 glob 导入功能
            const files = import.meta.glob('/public/posts/**/*.md', { eager: true });
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
}


