import {httpGet, httpPost} from '../util/HttpUtil.js'
import {sign} from "../util/CryptoUtils.js";
import {formatDate} from "../util/DateTimeUtils.js";
import {isNull} from "../util/ObjectsUtils.js";

const COMMENT_API_PRE_PATH = `https://api.github.com/repos/HsungRa/blog_comments`

const config = (token) => {
    return {
        Authorization: `Bearer ${token}`,
    }
};

export const addComment = (authUser, commentNumber, commentText) => {
    if (authUser !== null && commentNumber !== null && commentNumber !== undefined) {
        return httpPost(
            `${COMMENT_API_PRE_PATH}/issues/${commentNumber}/comments`,
            {body: commentText},
            config(authUser.accessToken),
            ''
        )
    } else {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }
}

class CommentNode {
    constructor(commentId, userName, userAvatar, content, commentAt, children) {
        this.commentId = commentId;
        this.userName = userName;
        this.userAvatar = userAvatar;
        this.content = content;
        this.commentAt = isNull(commentAt)||commentAt.trim().length===0?null:formatDate(new Date(commentAt));
        this.children = children;
    }

    // Getter for key
    get nodeKey() {
        return sign(this.content.trim());
    }
}

class CommentTree {
    constructor(root, indexMap) {
        this.root = root;
        this.indexMap = indexMap;
    }

    static newTree() {
        return new CommentTree(
            new CommentNode(null, null, null, null, null, []),
            []
        );
    }

    appendNode(node, applyToKey) {
        if (applyToKey == null) {
            const len = this.root.children.length;
            this.root.children.push(node);
            this.indexMap[node.nodeKey] = [len];
        } else {
            const applyToIndex = this.indexMap[applyToKey];
            let applyTo = this.root.children[applyToIndex[0]];
            let idx = 1;
            while (idx < applyToIndex.length) {
                applyTo = applyTo.children[applyToIndex[idx]];
                idx += 1;
            }
            const len = applyTo.children.length;
            applyTo.children.push(node);
            this.indexMap[node.nodeKey] = [...applyToIndex, len];
        }
    }
}

/**
 *
 * @param authUser
 * @param commentNumber
 */
export const loadComment = (authUser, commentNumber) => {
    return new Promise((resolve, reject) => {
        if (authUser !== null && commentNumber !== null && commentNumber !== undefined) {
            httpGet(
                `${COMMENT_API_PRE_PATH}/issues/${commentNumber}/comments`,
                null,
                config(authUser.accessToken),
                ''
            ).then((res) => {
                const commentTree = CommentTree.newTree();
                const pattern = /(>.*?(?:\r\n)+)/g;
                for (const i in res) {
                    const comment = res[i];
                    const contents = comment.body.split(pattern);
                    const contentLen = contents.length;
                    let pk = null
                    if (contentLen > 2) {
                        const p = contents[contentLen - 2]
                            .replace('>', '')
                            .replace(/^[ \r\n]+/, '')
                            .trim();
                        pk = sign(p)
                        if (!(pk in commentTree.indexMap)) {
                            pk = null
                        }
                    }
                    commentTree.appendNode(
                        new CommentNode(
                            comment.id,
                            comment.user.login,
                            comment.user.avatar_url == null ? '/logo.jpg' : comment.user.avatar_url,
                            contents[contentLen - 1].replace(/^[ \r\n]+/, ''),
                            comment.updated_at,
                            []),
                        pk);
                }
                resolve(commentTree);
            });
        } else {
            resolve(null);
        }

    });
}


