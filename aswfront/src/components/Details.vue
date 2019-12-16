<template>
    <b-container fluid style="margin-left:110px">
        <NavBar></NavBar>
        <b-row class="mt-5 mb-2">
            <b-col>
                <h1 style="display: flex;">{{issue.title}}</h1>
            </b-col>
            <b-col>

            </b-col>
        </b-row>
        <b-row>
            <h4 class="mx-3" style="display: flex; color: #172B4D">Issue #{{issue.id}}</h4>
            <div class="status status-new" v-if="issue.status == 'N'">NEW</div>
            <div class="status status-open" v-else-if="issue.status == 'O'">OPEN</div>
            <div class="status status-closed-resolved" v-else-if="issue.status == 'R'">RESOLVED</div>
            <div class="status status-hold" v-else-if="issue.status == 'H'">ON HOLD</div>
            <div class="status status-invalid-wontfix" v-else-if="issue.status == 'I'">INVALID</div>
            <div class="status status-duplicate" v-else-if="issue.status == 'D'">DUPLICATED</div>
            <div class="status status-invalid-wontfix" v-else-if="issue.status == 'W'">WONTFIX</div>
            <div class="status status-closed-resolved" v-else>CLOSED</div>
            <b-col></b-col>
        </b-row>
        <b-row>
            <ul v-for="comment in comments" :key="comment.id">
                <li>
                    <Comment 
                    :id="comment.id"
                    :text="comment.text"
                    :author="comment.author"
                    :created="comment.created_at">
                    </Comment>
                </li>
            </ul>
        </b-row>

    </b-container>
</template>

<script lang="ts">
import NavBar from "./verticalNavBar/NavBar.vue";
import api from "../services/apiService.js";
import global from "../services/global.js";
import Comment from "./Comment.vue";
export default {
    name: 'Details',
    components: { NavBar, Comment },
    data: function() {
        return {
            issue: {},
            comments: []
        };
    },
    mounted: function() {
        this.getIssue(this.$route.params.id)
        this.getComments(this.$route.params.id)
    },
    methods: {
        getIssue: function(id) {
            api.getIssueById(id, global.data().token).then(response => {
                this.issue = response
            })
        },
        getComments: function(id) {
            api.getIssueComments(id,  global.data().token).then(response => {
                this.comments = response
            })
        }
    }
}
</script>

<style scoped>
.status-closed-resolved {
  border: 1px solid #60b070;
}
.status-hold {
  border: 1px solid #ffe9a8;
}
.status-open {
  border: 1px solid #ccc;
}
.status-new {
  border: 1px solid #a5b3c2;
}
.status-invalid-wontfix {
  border: 1px solid #e8a29b;
}
.status-duplicate {
  border: 1px solid #c0ad9d;
}
.status {
  border-radius: 5px;
  width: min-content;
  height: min-content;
  font-weight: bold;
  margin-top:2px;
  padding: 3px;
  font-size: 8pt;
}
</style>