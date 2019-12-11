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
    getIssueComments,
    postIssueComment,
    putIssueCommentById,
    deleteIssueCommentById,
    getIssueDocuments,
    postIssueDocument,
    deleteIssueDocument
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

async function putVoteIssue(issueId, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/vote', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putUnvoteIssue(issueId, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/unVote', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putWatchIssue(issueId, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/watch', {
            headers: {
                Authorization: 'Token ' + token
            }
        })
        .then(response => {
            result = response.data
        })
    return result
}

async function putUnwatchIssue(issueId, token) {
    let result = {}
    await axios
        .put(baseUrl + 'issues/' + issueId + '/unWatch', {
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

/*----------COMMENTS----------*/
async function getIssueComments(issueId, token) {
    let result = []
    await axios.
        get(baseUrl + 'issues/' + issueId + '/comments', {
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
        .post(baseUrl + 'issues/' + issueId + '/comments', body, {
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
    let documentFD = new FormData();
    documentFD.append('document', file);
    let textFD = new FormData();
    textFD.set('description', description);

    let result = {}
    await axios
        .post(baseUrl + 'issues/' + issueId + '/document', documentFD, textFD, {
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