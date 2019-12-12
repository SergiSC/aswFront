<template>
    <div class="layout">
        <NavBar></NavBar>
        <b-row>
            <b-col>
                <h1 style="display:flex;">Issues</h1>
            </b-col>
            <b-col>
                <b-button class="bton-issues" href="/create">Create Issue</b-button>
            </b-col>
        </b-row>
        <b-row style="margin-left: 0">
            <p class="my-auto mr-2">Filter by:</p>
            <div>
                <b-nav pills>
                    <b-nav-item to="all" exact exact-active-class="active" class="mx-1 nav-item">All</b-nav-item>
                    <b-nav-item to="open" exact exact-active-class="active" class="mx-1" >Open</b-nav-item>
                    <b-nav-item to="mine" exact exact-active-class="active" class="mx-1">My issues</b-nav-item>
                    <b-nav-item to="watching" exact exact-active-class="active" class="mx-1">Watching</b-nav-item>
                </b-nav>
            </div>
        </b-row>
        <b-button @click="deleteissue()"> delete</b-button>
        
    </div>
</template>

<script>
import NavBar from './verticalNavBar/NavBar.vue'
import api from '../services/apiService.js'
export default {
    name: 'ListIssues',
    components: {NavBar},
    data: function() {
        return {
            list: [],
            delete: {},
            comments: [],
            onecomment: {}
        }
    },
    methods: {
        deletecomment: function() {
            api.deleteIssueCommentById(15,79,"ea83ec557b21f0dc385c553edb8717ef8252e100").then(
                
            )
        }
    }
}
</script>

<style scoped>
.layout {
    margin: 50px 50px 50px 120px;
    overflow: hidden;
}
.bton-issues {
    display: flex;
    float: right;
    border: none;
    border-radius: 0;
    background-color: #F4F5F7;
    color: black;
}
.bton-issues:hover {
    background-color: #EBECF0;
}
.bton-issues:focus {
    outline: none;
}
.nav-item {
    color: black
}
a.nav-link.active {
    background-color: #505F79;
}
a.nav-link {
    color:black;
}
</style>