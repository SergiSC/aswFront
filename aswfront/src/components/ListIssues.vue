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
        <b-nav pills @click="getIssues(lastOrder,'pills')">
          <b-nav-item to="all" exact exact-active-class="active" class="mx-1 nav-item">All</b-nav-item>
          <b-nav-item to="open" exact exact-active-class="active" class="mx-1">Open</b-nav-item>
          <b-nav-item to="mine" exact exact-active-class="active" class="mx-1">My issues</b-nav-item>
          <b-nav-item to="watching" exact exact-active-class="active" class="mx-1">Watching</b-nav-item>
        </b-nav>
      </div>
    </b-row>
    <b-row style="margin-left: 0; margin-top:10px;">
      <h4>Issues (1-{{totalIssues}} of {{totalIssues}})</h4>
      <table style="width:100%">
        <tr class="head-table">
          <th class="header-title itemh">
            <b-button class="btn-header" @click="getIssues('title','order')">
              Title
              <img
                v-if="lastOrder == 'title'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-title'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-small itemh">
            <b-button class="btn-header" @click="getIssues('kind','order')">
              T
              <img v-if="lastOrder == 'kind'" src="../assets/arrow.png" height="12" width="12" />
              <img
                v-if="lastOrder == '-kind'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-small itemh">
            <b-button class="btn-header" @click="getIssues('priority','order')">
              P
              <img v-if="lastOrder == 'priority'" src="../assets/arrow.png" height="12" width="12" />
              <img
                v-if="lastOrder == '-priority'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-medium itemh">
            <b-button class="btn-header" @click="getIssues('status','order')">
              Status
              <img
                v-if="lastOrder == 'status'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-status'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-small itemh">
            <b-button class="btn-header" @click="getIssues('votes','order')">
              Votes
              <img
                v-if="lastOrder == 'votes'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-votes'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-medium itemh">
            <b-button class="btn-header" @click="getIssues('assignee','order')">
              Assignee
              <img
                v-if="lastOrder == 'assignee'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-assignee'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-medium itemh">
            <b-button class="btn-header" @click="getIssues('created_at','order')">
              Created
              <img
                v-if="lastOrder == 'created_at'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-created_at'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-medium itemh">
            <b-button class="btn-header" @click="getIssues('updated_at','order')">
              Updated
              <img
                v-if="lastOrder == 'updated_at'"
                src="../assets/arrow.png"
                height="12"
                width="12"
              />
              <img
                v-if="lastOrder == '-updated_at'"
                src="../assets/arrow.png"
                style="transform: rotate(180deg);"
                height="12"
                width="12"
              />
            </b-button>
          </th>
          <th class="header-small itemh"></th>
        </tr>
        <tr v-for="issue in issuesList" :key="issue.id">
          <td class="item">
            <a :href="issue.id">#{{issue.id}}: {{issue.title}}</a>
          </td>
          <td class="item">
            <img v-if="issue.kind == 'B'" src="../assets/kind/bug.png" height="16" width="16" />
            <img
              v-else-if="issue.kind == 'E'"
              src="../assets/kind/enhancement.png"
              height="16"
              width="16"
            />
            <img v-else-if="issue.kind == 'T'" src="../assets/kind/task.png" height="16" width="16" />
            <img v-else src="../assets/kind/proposal.png" height="16" width="16" />
          </td>
          <td class="item">
            <img
              v-if="issue.priority == 'BL'"
              src="../assets/priority/blocker.png"
              height="16"
              width="16"
            />
            <img
              v-else-if="issue.priority == 'MI'"
              src="../assets/priority/minor.png"
              height="16"
              width="16"
            />
            <img
              v-else-if="issue.priority == 'MA'"
              src="../assets/priority/major.png"
              height="16"
              width="16"
            />
            <img
              v-else-if="issue.priority == 'TR'"
              src="../assets/priority/trivial.png"
              height="16"
              width="16"
            />
            <img v-else src="../assets/priority/critical.png" height="16" width="16" />
          </td>
          <td class="item">
            <div class="status status-new" v-if="issue.status == 'N'">NEW</div>
            <div class="status status-open" v-else-if="issue.status == 'O'">OPEN</div>
            <div class="status status-closed-resolved" v-else-if="issue.status == 'R'">RESOLVED</div>
            <div class="status status-hold" v-else-if="issue.status == 'H'">ON HOLD</div>
            <div class="status status-invalid-wontfix" v-else-if="issue.status == 'I'">INVALID</div>
            <div class="status status-duplicate" v-else-if="issue.status == 'D'">DUPLICATED</div>
            <div class="status status-invalid-wontfix" v-else-if="issue.status == 'W'">WONTFIX</div>
            <div class="status status-closed-resolved" v-else>CLOSED</div>
          </td>
          <td class="item" style="text-align: center">
            <div v-if="issue.votes.length > 0">{{issue.votes.length}}</div>
            <div v-else></div>
          </td>
          <td class="item">{{issue.assignee}}</td>
          <td class="item">{{issue.created_at.split('T')[0]}}</td>
          <td class="item">{{issue.updated_at.split('T')[0]}}</td>
          <td>
            <button @click="watchUnwatchIssue(issue.id, issue.watchers)" class="bton-watch">
              <img v-if="!isWatching(issue.watchers)" src="../assets/watching/eye-close.png" alt height="32px" width="32px"/>
              <img v-else src="../assets/watching/eye-open.png" alt height="32px" width="32px"/>
            </button>
          </td>
        </tr>
      </table>
    </b-row>
  </div>
</template>

<script>
import NavBar from "./verticalNavBar/NavBar.vue";
import api from "../services/apiService.js";
import { mapGetters } from "vuex";
export default {
  name: "ListIssues",
  components: { NavBar },
  data: function() {
    return {
      issuesList: [],
      totalIssues: Number,
      lastOrder: String
    };
  },
  mounted: function() {
    this.getIssues("id","pills");
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
    getIssues: function(order, action) {
      let ord = order;
      if(action === "order") {
        if (order === this.lastOrder) {
          if (order.charAt(0) == "-") {
            ord = order.substr(1);
          } else {
            ord = "-" + order;
          }
        }
      }
      api.getIssues(this.$route.path.split('/')[2], ord, this.token).then(response => {
        this.issuesList = response;
        this.totalIssues = response.length;
        this.lastOrder = ord;
        this.setUsers(response);
      });
    },
    setUsers: function() {
      this.issuesList.forEach(issue => {
        this.users.forEach(us => {
          if (issue.assignee != null && issue.assignee == us.id) {
            issue.assignee = us.username;
          }
        });
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
          this.getIssues(this.lastOrder,"pills");
        });
      } else {
        api.putWatchIssue(issueId, body, this.token).then(() => {
          this.getIssues(this.lastOrder,"pills");
        });
      }
    }
  }
};
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
  background-color: #f4f5f7;
  color: black;
}
.bton-issues:hover {
  background-color: #ebecf0;
}
.bton-issues:focus {
  outline: none;
}
.nav-item {
  color: black;
}
a.nav-link.active {
  background-color: #505f79;
}
a.nav-link {
  color: black;
}
.head-table,
.head-table > th {
  border-bottom: 2px solid #dfe1e6;
  color: #5e6c84;
  font-weight: 600 !important;
}
.item {
  text-align: left;
  padding: 4px;
}
.itemh {
  text-align: left;
}
.header-title {
  width: 48%;
}
.header-small {
  width: 5%;
}
.header-medium {
  width: 7%;
}
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
  font-weight: bold;
  padding: 3px;
  font-size: 8pt;
}
.btn-header {
  border-radius: 0;
  background-color: white;
  color: #5e6c84;
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 2px;
  font-weight: bold;
  font-size: 1rem;
  border-color: white;
}
.btn-header:hover {
  background-color: #deebff;
  cursor: pointer;
}
.btn-header:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.bton-watch {
  background-color: white;
  border: none;
}
</style>