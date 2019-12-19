import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import api from "../services/apiService.js"

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: "my-app",
    storage: localStorage
});

export const store = new Vuex.Store({
    namespaced: true,
    plugins: [vuexPersist.plugin],
    state: {
        token: '',
        userName: '',
        idUser: '',
        users: {},
        tokenAux: 'ea83ec557b21f0dc385c553edb8717ef8252e100'
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUserName(state, name) {
            state.userName = name
        },
        setActualUser(state, idUser) {
            state.idUser = idUser
        },
        setUsers(state, users) {
            state.users = users
        },
        deleteData(state) {
            state.token = '',
                state.userName = '',
                state.idUser = '',
                state.users = {}
        }
    },
    getters: {
        token: state => {
            return state.token
        },
        userName: state => {
            return state.userName
        },
        idUser: state => {
            return state.idUser
        },
        users: state => {
            return state.users
        },
    },
    actions: {
        setInformationUser({ commit, state }, idClient) {
            return new Promise(resolve => {
                api.getUserInfo(idClient).then(result => {
                    commit("setUserName", result.data.email.split('@')[0]);
                    api.getUserToken(name, state.tokenAux).then(result2 => {
                        commit("setToken", result2.key);
                        commit("setActualUser", result2.user);
                    })
                    resolve();
                })
            });
        },
        setTotalUsers({ commit, state }) {
            return new Promise(resolve => {
                api.getUsers(state.tokenAux).then(result => {
                    commit("setUsers", result);
                    resolve();
                })
            });
        },
        deleteAllData({ commit }) {
            return new Promise(resolve => {
                commit("deleteData");
                resolve()
            });
        },
    }
})