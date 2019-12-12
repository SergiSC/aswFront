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
        <b-row style="margin-left: 0; margin-top:10px;">
            <h4>Issues ( - of {{totalIssues}})</h4>
            <table style="width:100%">
                <tr class="head-table">
                    <th class="header-title item">Title</th>
                    <th class="header-icon item">T</th>
                    <th class="header-icon item">P</th>
                    <th class="header-medium item">Status</th>
                    <th class="header-small item">Votes</th>
                    <th class="header-large item">Assignee</th>
                    <th class="header-medium item">Created</th>
                    <th class="header-medium item">Updated</th>
                    <th class="header-icon item"></th>
                </tr>
                <tr v-for="issue in issuesList" :key="issue.id">
                    <td class="item"><a :href="issue.id">#{{issue.id}}: {{issue.title}}</a></td>
                    <td class="item">{{issue.kind}}</td>
                    <td class="item">{{issue.priority}}</td>
                    <td class="item">{{issue.status}}</td>
                    <td class="item">{{issue.votes.length}}</td>
                    <td class="item">{{issue.assignee}}</td>
                    <td class="item">{{issue.created_at}}</td>
                    <td class="item">{{issue.updated_at}}</td>
                    <td>50</td>
                </tr>
            </table>
        </b-row>
        
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
            issuesList: [],
            totalIssues: Number,
        }
    },
    mounted: function() {
        this.getIssues('','id')
    },
    methods: {
        getIssues: function(view,order) {
            api.getIssues(view, order, "ea83ec557b21f0dc385c553edb8717ef8252e100").then(response => {
                this.issuesList = response
                this.totalIssues = response.length
            })
        },
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
.head-table, .head-table > th {
    border-bottom: 2px solid #DFE1E6;
    color: #5E6C84;
    font-weight: 600 !important;
}
.item {
    text-align: left;
    padding: 8px;
}
.header-title {
    width: 25%;
}
.header-icon {
    width: 5%;
}
.header-small {
    width: 8%;
}
.header-medium {
    width: 13%;
}
.header-large {
    width: 18%;
}
</style>