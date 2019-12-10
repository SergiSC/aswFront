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
                    <b-nav-item active class="mx-1 nav-item" href="all">All</b-nav-item>
                    <b-nav-item class="mx-1" href="open">Open</b-nav-item>
                    <b-nav-item class="mx-1" href="mine">My issues</b-nav-item>
                    <b-nav-item class="mx-1" href="watching">Watching</b-nav-item>
                </b-nav>
            </div>
        </b-row>
    </div>
</template>

<script>
import NavBar from '../verticalNavBar/NavBar.vue'
export default {
    name: 'ListIssues',
    components: {NavBar},
    data: function() {
        return {
        }
    },
    methods: {
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