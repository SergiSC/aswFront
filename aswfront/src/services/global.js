export default {
    data: function() {
        return {
            token: 'ea83ec557b21f0dc385c553edb8717ef8252e100',
            userName: '',
            actualUser: 4
        }
    },
    getToken,
    setToken,
    setName,
    getName,
    setUserId,
    getUserId
}

function getToken() {
    return this.token
}

function setToken(tok) {
    this.token = tok
}

function setName(name) {
    this.userName = name
}

function getName() {
    return this.userName
}

function setUserId(id) {
    this.actualUser = id
}

function getUserId() {
    return this.actualUser
}