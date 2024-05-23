import axios from "axios";
import {get,} from "./StorageUtil.js"
import {AUTH_KEY,} from "./ThirdAuthUtil.js";
// api 文档https://docs.github.com/zh/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
const COMMENT_API_PRE_PATH = `https://api.github.com/repos/HsungRa/blog_comments`

const config = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
};

const blogKey = (blogCategory, blogTitle) => {
    return blogCategory + "%23" + blogTitle
}


export const loadComment = (blogCategory, blogTitle) => {
    let key = blogKey(blogCategory, blogTitle)
    let url = `${COMMENT_API_PRE_PATH}/issues?labels=${key}`
    return axios.get(url, config(null))
}

export const createComment = (blogCategory, blogTitle, commentText) => {
    let auth = get(AUTH_KEY)
    if (auth == null) {
        alert("未登录用户")
        return
    }
    return axios.post(`${COMMENT_API_PRE_PATH}/issues`, {
        title: "Comment",
        body: commentText,
        labels: [blogCategory + '#' + blogTitle]
    }, config(auth.accessToken))
}

export const feedbackComment = (blogCategory, blogTitle, feedback, replyComment) => {
    // https://api.github.com/repos/HsungRa/blog_comments/issues/2/comments
    let auth = get(AUTH_KEY)
    if (auth == null) {
        alert("未登录用户")
        return
    }
    return axios.post(`${COMMENT_API_PRE_PATH}/issues`, {
        title: "@" + replyComment.userName + " \"" + replyComment.body.substring(0, 20) + "\"",
        body: feedback,
        labels: [blogCategory + '#' + blogTitle]
    }, config(auth.accessToken))
}

export const getBlogComment = async (category, title) => {
    const res = await loadComment(category, title)
    let commentList = res.data.sort((a, b) => a.id - b.id);
    let comments = []
    for (let comment of commentList) {
        const item = parseCommentRsp(comment)
        comments.push(item)
    }
    return comments;
}

export const parseCommentRsp = (comment) => {
    let user = comment.user
    return {
        userName: user.login,
        userAvatar: user.avatar_url == null ? '/logo.jpg' : user.avatar_url,
        id: comment.id,
        title: comment.title,
        number: comment.number,
        body: comment.body,
        time: comment.updated_at,
        isReply: comment.title !== "Comment"
    };
};




