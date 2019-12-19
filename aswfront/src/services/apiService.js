import axios from 'axios';

const baseUrl = 'http://aswissuetracker.herokuapp.com/api/'

export default {
    getIssues,
    postIssue,
    putVoteIssue,
    putUnvoteIssue,
    putWatchIssue,
    putUnwatchIssue,
    getIssueById,
    putIssueById,
    deleteIssueById,
    putIssueWorkflow,
    getIssueComments,
    postIssueComment,
    putIssueCommentById,
    deleteIssueCommentById,
    getIssueDocuments,
    postIssueDocument,
    deleteIssueDocument,
    getUsers,
    getUserToken,
    getUserInfo
}

/*----------ISSUES----------*/
async function getIssues(view, order, token) {
    let result = []
    await axios
        .get(baseUrl + 'issues/?view=' + view + '&order=' + order, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function postIssue(body, token) {
    let result = {}
    await axios
        .post(baseUrl + 'issues/', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putVoteIssue(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/vote', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putUnvoteIssue(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/unVote', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putWatchIssue(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/watch', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putUnwatchIssue(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/unWatch', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function getIssueById(issueId, token) {
    let result = {}
    await axios
        .get(baseUrl + 'issues/' + issueId, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putIssueById(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId, body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function deleteIssueById(issueId, token) {
    let result = {}
    await axios
        .delete(baseUrl + 'issues/' + issueId, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putIssueWorkflow(issueId, body, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + "/workflow", body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

/*----------COMMENTS----------*/
async function getIssueComments(issueId, token) {
    let result = []
    await axios.
        get(baseUrl + 'issues/' + issueId + '/comments/', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function postIssueComment(issueId, body, token) {
    let result = {}
    await axios
        .post(baseUrl + 'issues/' + issueId + '/comments/', body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putIssueCommentById(issueId, commentId, body, token) {
    let result = []
    await axios
        .put(baseUrl + 'issues/' + issueId + '/comments/' + commentId, body, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function deleteIssueCommentById(issueId, commentId, token) {
    let result = {}
    await axios
        .delete(baseUrl + 'issues/' + issueId + '/comments/' + commentId, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

/*----------DOCUMENTS----------*/
async function getIssueDocuments(issueId, token) {
    let result = []
    await axios.
        get(baseUrl + 'issues/' + issueId + '/document', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function postIssueDocument(issueId, file, description, token) {
    let formData = new FormData();
    formData.append('document', file);
    formData.set('description', description);

    let result = {}
    await axios
        .post(baseUrl + 'issues/' + issueId + '/document', formData, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function deleteIssueDocument(issueId, documentId, token) {
    let result = {}
    await axios
        .delete(baseUrl + 'issues/' + issueId + '/document/' + documentId, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

/*----------USERS----------*/
async function getUsers(token) {
    let result = []
    await axios
        .get(baseUrl + 'users', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function getUserToken(name, token) {
    let result = []
    await axios
        .get(baseUrl + 'user?user=' + name, {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function getUserInfo(token) {
    let result = {}
    await axios
        .get('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token).then(response =>{
            result = response
        })
    return result
}