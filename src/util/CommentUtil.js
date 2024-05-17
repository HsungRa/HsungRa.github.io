import axios from "axios";

// api 文档https://docs.github.com/zh/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
const TOKEN = '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'
const COMMENT_API_PRE_PATH = `https://api.github.com/repos/HsungRa/blog_comments`

const config = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    }
};

const blogKey = (blogCategory, blogTitle) => {
    return blogCategory + "%23" + blogTitle
}


export const loadComment = (blogCategory, blogTitle) => {
    // https://api.github.com/repos/HsungRa/blog_comments/issues?labels=test%23test2
    // https://api.github.com/repos/HsungRa/blog_comments/issues/2/comments
    let key = blogKey(blogCategory, blogTitle)
    let url = `${COMMENT_API_PRE_PATH}/issues?labels=${key}`
    return axios.get(url, config)
}

// https://api.github.com/repos/HsungRa/blog_comments/issues/2/comments
const loadCommentDiscuss = (commentNo) => {
    const url = `${COMMENT_API_PRE_PATH}/issues/${commentNo}/comments`;
    return axios.get(url, config);
}


// /repos/{owner}/{repo}/issues/{issue_number}/comments
// https://api.github.com/repos/HsungRa/blog_comments/issues
export const createComment = (blogCategory, blogTitle, commentUser, comment) => {
    axios.post(`${COMMENT_API_PRE_PATH}/issues/{issue_number}/comments`, {
        title: commentUser,
        body: comment,
        labels: [blogCategory + '#' + blogTitle]
    }, config).then((res) => {
        console.log(res.data)
    })
}

export const feedbackComment = (blogCategory, blogTitle, commentUser, feedback) => {
    // https://api.github.com/repos/HsungRa/blog_comments/issues/2/comments
    axios.post(`${COMMENT_API_PRE_PATH}/issues/feedback`, {}).then((res) => {
        console.log(res.data)
    }, config)
}





