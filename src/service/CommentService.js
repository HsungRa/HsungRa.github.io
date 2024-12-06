import {httpGet, httpPost} from '../util/HttpUtil.js'

const COMMENT_API_PRE_PATH = `https://api.github.com/repos/HsungRa/blog_comments`

const config = (token) => {
    return {
        Authorization: `Bearer ${token}`,
    }
};

export const loadComment = (articleCode) => {
    let url = '/api/article/comments'
    return httpGet(url, {'article_code': articleCode})
}

export const addComment = (commentBy, commentNumber, commentText) => {
    if (commentBy == null) {
        alert("未登录")
        return
    }
    return httpPost(
        `${COMMENT_API_PRE_PATH}/issues/${commentNumber}/comments`,
        {body: commentText},
        config(commentBy.accessToken),
        ''
    )
}

class CommentNode {
    constructor(commentId, userName, userAvatar, content, commentAt, children) {
        this.commentId = commentId;
        this.userName = userName;
        this.userAvatar = userAvatar;
        this.content = content;
        this.commentAt = commentAt;
        this.children = children;
    }

    // Getter for hashKey
    get hashKey() {
        return crypto.createHash('sha256').update(this.content.trim()).digest('hex');
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

    appendNode(node,applyToKey) {
        if (applyToKey == null) {
            const len = this.root.children.length;
            this.root.children.append(node);
            this.indexMap[node.hashKey()] = [len];
        }else {
            const applyToIndex = this.indexMap[applyToKey];
            let applyTo = this.root.children[applyToIndex[0]];
            let idx = 1;
            while(idx < applyToIndex.length) {
                applyTo = applyTo.children[applyToIndex[idx]];
                idx+=1;
            }
            const len = applyTo.children.length;
            applyTo.children.append(node);
            this.indexMap[node.hashKey()] = [...applyToIndex, len];
        }
    }
}

export const loadCommentTree = (articleCode) => {
    loadComment(articleCode).then((res) => {
        const commentTree = CommentTree.newTree();
        for (const comment in res){
            const contents = comment.body.replace('>', '').split('\r\n');
            const data = contents.filter(s => s !=null && s.trim().length > 0);
            const size = data.length;
            const pk = size > 1? crypto.createHash('sha256').update(data[size - 2].trim()).digest('hex'):null;
            commentTree.appendNode(
                new CommentNode(
                    comment.id,
                    comment.user.login,
                    comment.user.avatar_url == null ? '/logo.jpg' : comment.user.avatar_url,
                    data[size - 1],
                    comment.updated_at,
                    []),
                pk);
        }
    })
}

