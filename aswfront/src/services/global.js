export default {
    data: function() {
        return {
            token: 'ea83ec557b21f0dc385c553edb8717ef8252e100'
        }
    },
    getToken,
    setToken,
}

function getToken() {
    return this.token
}

function setToken(tok) {
    this.token = tok
}