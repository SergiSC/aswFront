<template>
  <div style="margin-left:110px; overflow: hidden;">
    <NavBar></NavBar>
    <b-row class="mt-5 mb-2">
      <b-col>
        <h3 style="display: flex;">{{issue.title}}</h3>
      </b-col>
      <b-col>
        <b-row>
          <b-form-select
            class="workflow-select mr-2"
            v-model="selectedWorkflow"
            :options="optionsWorkflow"
            @change="changeWorkflow()"
          >
            <template v-slot:first>
              <option :value="null" disabled>Workflow</option>
            </template>
          </b-form-select>
          <b-button class="bton-issues mr-2" @click="showModal()">Attachment</b-button>
          <b-modal ref="modal" hide-footer title="New attachment">
            <div class="d-block text-center">
              <h5 style="display:flex;">Attachment</h5>
              <b-form-file
                v-model="attatchmentFile"
                :state="Boolean(file)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
              <h5 style="display:flex;">Description:</h5>
              <b-form-textarea
                class="mb-3"
                id="textarea"
                v-model="descriptionAttachment"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            <b-row>
              <b-col>
                <b-button class="button btn-create" @click="newAttachment()" block>Save</b-button>
              </b-col>
              <b-col>
                <b-button @click="cancelEdit()" block>Cancel</b-button>
              </b-col>
            </b-row>
          </b-modal>
          <b-button class="bton-issues mr-2" @click="deleteIssue()">Delete</b-button>
          <b-button class="bton-issues mr-2" :href="'/edit/' + issue.id">Edit Issue</b-button>
          <b-button class="bton-issues" href="/create">Create Issue</b-button>
        </b-row>
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
      <p class="ml-3 my-1" style="color:var(--navbar-color);">{{authorName}}</p>
      <p class="mx-1 my-1 mb-3">created an issue</p>
      <p class="my-1" style="font-weight: bold;">{{issueDate}}</p>
    </b-row>
    <b-row class="mb-3" style="width:50%; text-align:left">
      <p class="ml-3 my-1" style="color:var(--navbar-color); font-weight: bold;">Description:</p>
      <p class="ml-3 my-1">{{issue.description}}</p>
    </b-row>
    <b-row class="ml-3">
      <h3>New comment</h3>
      <b-form-textarea
        id="textarea"
        v-model="textareaComment"
        placeholder="Enter a new comment..."
        class="textArea"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-row>
    <b-row class="ml-3">
      <b-button class="mr-3 button-edit" @click="newComment()">Save</b-button>
      <b-button @click="textareaComment = ''">Cancel</b-button>
    </b-row>
    <b-row class="mt-3 ml-3">
      <h4>Comments:</h4>
      <div class="div-comment" v-for="comment in comments" :key="comment.id">
        <Comment
          @rerender="refreshComponent()"
          :auto="comment.auto"
          :text="comment.text"
          :author="comment.author"
          :created="comment.created_at"
          :id="comment.id"
        ></Comment>
      </div>
    </b-row>
    <!--dreta arriba-->
    <b-container class="info-resum" fluid>
      <b-row>
        <b-col>
          <h4 class="title-resum mt-4">Issue information:</h4>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Assignee:</p>
            </b-col>
            <b-col cols="9" style="text-align:left">
              <p v-if="issue.assignee !== null">{{assigneeName}}</p>
              <p v-else>--</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Kind:</p>
            </b-col>
            <b-col cols="9" style="text-align: left;">
              <b-row>
                <div class="mx-2">
                  <img v-if="issue.kind == 'B'" src="../assets/kind/bug.png" height="18" width="18" />
                  <img
                    v-else-if="issue.kind == 'E'"
                    src="../assets/kind/enhancement.png"
                    height="18"
                    width="18"
                  />
                  <img
                    v-else-if="issue.kind == 'T'"
                    src="../assets/kind/task.png"
                    height="18"
                    width="18"
                  />
                  <img v-else src="../assets/kind/proposal.png" height="18" width="18" />
                </div>

                <p>{{issue.kind}}</p>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Priority:</p>
            </b-col>
            <b-col cols="9" style="text-align: left;">
              <b-row>
                <div class="mx-2">
                  <img
                    v-if="issue.priority == 'BL'"
                    src="../assets/priority/blocker.png"
                    height="18"
                    width="18"
                  />
                  <img
                    v-else-if="issue.priority == 'MI'"
                    src="../assets/priority/minor.png"
                    height="18"
                    width="18"
                  />
                  <img
                    v-else-if="issue.priority == 'MA'"
                    src="../assets/priority/major.png"
                    height="18"
                    width="18"
                  />
                  <img
                    v-else-if="issue.priority == 'TR'"
                    src="../assets/priority/trivial.png"
                    height="18"
                    width="18"
                  />
                  <img v-else src="../assets/priority/critical.png" height="18" width="18" />
                </div>

                <p>{{issue.priority}}</p>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Status:</p>
            </b-col>
            <b-col cols="9" style="text-align: left;">
              <div v-if="issue.status == 'N'">NEW</div>
              <div v-else-if="issue.status == 'O'">OPEN</div>
              <div v-else-if="issue.status == 'R'">RESOLVED</div>
              <div v-else-if="issue.status == 'H'">ON HOLD</div>
              <div v-else-if="issue.status == 'I'">INVALID</div>
              <div v-else-if="issue.status == 'D'">DUPLICATED</div>
              <div v-else-if="issue.status == 'W'">WONTFIX</div>
              <div v-else>CLOSED</div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Votes:</p>
            </b-col>
            <b-col cols="9" style="text-align: left;">
              <b-row class="mx-2">
                <p class="vote-num mr-3">{{issue.votes.length}}</p>
                <b-button
                  v-if="isWatching(issue.votes)"
                  size="sm"
                  class="button-vote"
                  @click="voteUnvoteIssue(issue.id, issue.votes)"
                >Remove vote</b-button>
                <b-button
                  v-else
                  size="sm"
                  class="button-vote"
                  @click="voteUnvoteIssue(issue.id, issue.votes)"
                >Vote for this issue</b-button>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" style="text-align: right;">
              <p>Watchers:</p>
            </b-col>
            <b-col cols="9" style="text-align: left;">
              <b-row class="mx-2">
                <p class="vote-num mr-3">{{issue.watchers.length}}</p>
                <b-button
                  v-if="isWatching(issue.watchers)"
                  size="sm"
                  class="button-vote"
                  @click="watchUnwatchIssue(issue.id, issue.watchers)"
                >Stop watching</b-button>
                <b-button
                  v-else
                  size="sm"
                  class="button-vote"
                  @click="watchUnwatchIssue(issue.id, issue.watchers)"
                >Watch this issue</b-button>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!--dreta abajo-->
    <b-container class="attachment" fluid>
      <b-row>
        <b-col>
          <h4 class="title-resum mt-4">Attachments:</h4>
          <b-row class="ml-4 my-2" v-for="attachment in attachments" :key="attachment.id">
            <b-button @click="deleteAttachment(attachment.id)" class="bton-delete">
              <img
                src="https://image.flaticon.com/icons/png/512/1632/1632708.png"
                alt
                width="16px"
                height="16px"
              />
            </b-button>
            <a :href="'/file/' + attachment.id">{{attachment.document.split('/')[3]}}</a>
            : {{attachment.description}}
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import NavBar from "./verticalNavBar/NavBar.vue";
import api from "../services/apiService.js";
import { mapGetters } from "vuex";
import Comment from "./Comment.vue";
export default {
  name: "Details",
  components: { NavBar, Comment },
  data: function() {
    return {
      issue: {},
      issueDate: "",
      comments: [],
      attachments: [],
      selectedWorkflow: null,
      optionsWorkflow: [
        { value: "R", text: "Resolved" },
        { value: "H", text: "On hold" },
        { value: "O", text: "Open" },
        { value: "I", text: "Invalid" },
        { value: "D", text: "Duplicate" },
        { value: "W", text: "Wontfix" },
        { value: "C", text: "Closed" }
      ],
      textareaComment: "",
      assigneeName: "",
      authorName: "",
      descriptionAttachment: "",
      attatchmentFile: File
    };
  },
  mounted: function() {
    this.getIssue(this.$route.params.id);
    this.getComments(this.$route.params.id);
    this.getAttachments(this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      userName: "userName",
      token: "token",
      idUser: "idUser",
      users: "users"
    })
  },
  methods: {
    getIssue: function(id) {
      api.getIssueById(id, this.token).then(response => {
        this.issue = response;
        this.issueDate = new Date(this.issue.created_at)
          .toString()
          .split(" GMT")[0];
        this.users.forEach(element => {
          if (element.id === response.assignee) {
            this.assigneeName = element.username;
          }
          if (element.id === response.reporter) {
            this.authorName = element.username;
          }
        });
      });
    },
    getComments: function(id) {
      api.getIssueComments(id, this.token).then(response => {
        this.comments = response;
        this.comments.sort(function(a, b) {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      });
    },
    getAttachments: function(id) {
      api.getIssueDocuments(id, this.token).then(response => {
        this.attachments = response;
      });
    },
    newComment: function() {
      const body = {
        text: this.textareaComment
      };
      api.postIssueComment(this.issue.id, body, this.token).then(() => {
        this.getComments(this.issue.id);
      });
    },
    addAttachment: function() {},
    changeWorkflow: function() {
      const body = {
        status: this.selectedWorkflow
      };
      api.putIssueWorkflow(this.issue.id, body, this.token).then(() => {
        this.getIssue(this.issue.id);
        this.getComments(this.issue.id);
      });
    },
    deleteIssue: function() {
      api.deleteIssueById(this.issue.id, this.token).then(() => {
        this.$router.push("/issues");
      });
    },
    isWatching: function(watchers) {
      let find = false;
      watchers.forEach(element => {
        if (element == this.idUser) {
          find = true;
        }
      });
      return find;
    },
    watchUnwatchIssue: function(issueId, watchers) {
      const body = {};
      if (this.isWatching(watchers)) {
        api.putUnwatchIssue(issueId, body, this.token).then(() => {
          this.getIssue(this.$route.params.id);
        });
      } else {
        api.putWatchIssue(issueId, body, this.token).then(() => {
          this.getIssue(this.$route.params.id);
        });
      }
    },
    hadVoted: function(votes) {
      let find = false;
      votes.forEach(element => {
        if (element == this.idUser) {
          find = true;
        }
      });
      return find;
    },
    voteUnvoteIssue: function(issueId, votes) {
      const body = {};
      if (this.hadVoted(votes)) {
        api.putUnvoteIssue(issueId, body, this.token).then(() => {
          this.getIssue(this.$route.params.id);
        });
      } else {
        api.putVoteIssue(issueId, body, this.token).then(() => {
          this.getIssue(this.$route.params.id);
        });
      }
    },
    showModal: function() {
      this.$refs["modal"].show();
    },
    cancelEdit: function() {
      this.$refs["modal"].hide();
    },
    newAttachment: function() {
      api
        .postIssueDocument(
          this.$route.params.id,
          this.attatchmentFile,
          this.descriptionAttachment,
          this.token
        )
        .then(() => {
          this.refreshComponent();
          this.$refs["modal"].hide();
        });
    },
    deleteAttachment: function(attachmentId) {
      api
        .deleteIssueDocument(this.$route.params.id, attachmentId, this.token)
        .then(() => {
          this.refreshComponent();
        });
    },
    refreshComponent: function() {
      this.getComments(this.$route.params.id);
      this.getAttachments(this.$route.params.id);
    }
  }
};
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
  margin-top: 2px;
  padding: 3px;
  font-size: 8pt;
}
.attachment {
  border: 1px solid grey;
  background-color: white;
  position: fixed;
  top: 500px;
  right: 20px;
  z-index: 999;
  width: 40%;
}
.div-comment {
  width: 100%;
  margin: 3px 50% 3px 0;
}
.textArea {
  border: 1px solid var(--navbar-color);
  margin: 3px 50% 3px 0;
}
.button-edit {
  border-color: var(--navbar-color);
  background-color: var(--navbar-color);
  color: white;
}
.button-edit:hover,
.button-edit:focus {
  border-color: var(--navbar-color);
  background-color: white;
  color: var(--navbar-color);
}
.info-resum {
  border: 1px solid grey;
  background-color: white;
  position: fixed;
  top: 150px;
  right: 20px;
  z-index: 999;
  width: 40%;
}
.title-resum {
  border-bottom: 1px solid grey;
  color: grey;
}
.button-vote {
  height: 30px;
  background-color: white;
  border-color: white;
  color: var(--navbar-color);
  margin-top: -3px;
}
.vote-num {
  margin-left: -7px;
  width: 20px;
  background-color: var(--navbar-color);
  border-radius: 25px;
  padding: 0 5px;
  color: white;
}
.workflow-select {
  width: 20%;
}
.bton-issues {
  display: flex;
  float: right;
  border: none;
  border-radius: 0;
  background-color: #f4f5f7;
  color: black;
}
.bton-issues:hover {
  background-color: #ebecf0;
}
.bton-issues:focus {
  outline: none;
}
.bton-delete {
  background-color: white !important;
  border: none;
  padding: 0;
  margin-right: 5px;
}
</style>