<template>
  <div class="layout">
    <div class="alert-fail">
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      Title, type and priority fields are mandatory!
    </b-alert>
    </div>
    <NavBar></NavBar>
    <b-container fuild>
      <b-row>
        <b-col>
          <h1 style="display: flex;">Issues</h1>
          <h5 v-if="actualPage == 'Edit Issue'" style="display: flex; font-weight: bold">Edit issue</h5>
          <h5 v-else style="display: flex; font-weight: bold">Create issue</h5>
        </b-col>
      </b-row>
      <!--title-->
      <b-row class="my-2">
        <b-col cols="3">
          <b-row class="text-row">
            Title
            <p class="required">*</p>
          </b-row>
        </b-col>
        <b-col cols="9">
          <b-form-input v-model="titleText" placeholder="Enter the title of the issue"></b-form-input>
        </b-col>
      </b-row>
      <!--description-->
      <b-row class="my-2">
        <b-col cols="3">
          <b-row class="text-row">Description</b-row>
        </b-col>
        <b-col cols="9">
          <b-form-textarea
            id="textarea"
            v-model="descriptionText"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>

      <!--assignee-->
      <b-row class="my-2">
        <b-col cols="3">
          <b-row class="text-row">Assignee</b-row>
        </b-col>
        <b-col cols="9">
          <b-form-select v-model="assigneeSelected" :options="optionsAssignee"></b-form-select>
        </b-col>
      </b-row>
      <!--kind-->
      <b-row class="my-2">
        <b-col cols="3">
          <b-row class="text-row">
            Kind
            <p class="required">*</p>
          </b-row>
        </b-col>
        <b-col cols="9">
          <b-form-select v-model="kindSelected" :options="optionsKind"></b-form-select>
        </b-col>
      </b-row>
      <!--priority-->
      <b-row class="my-2">
        <b-col cols="3">
          <b-row class="text-row">
            Priority
            <p class="required">*</p>
          </b-row>
        </b-col>
        <b-col cols="9">
          <b-form-select v-model="prioritySelected" :options="optionsPriority"></b-form-select>
        </b-col>
      </b-row>
      <!--buttons-->
      <b-row class="my-2">
        <b-col cols="8"></b-col>
        <b-col cols="2">
          <b-button v-if="actualPage == 'Edit Issue'" class="button btn-create" @click="editIssue()"> Edit Issue</b-button>
          <b-button v-else class="button btn-create" @click="newIssue()">Create Issue</b-button>
        </b-col>
        <b-col cols="2">
          <b-button class="button" @click="toList()">Cancel</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import NavBar from "./verticalNavBar/NavBar.vue";
import api from "../services/apiService.js";
import { mapGetters } from "vuex";
export default {
  name: "CreateEdit",
  components: { NavBar },
  data: function() {
    return {
      titleText: "",
      descriptionText: "",
      users: [],
      optionsAssignee: [
        { value: null, text: '--' },
        { value: 2, text: "santiago.lasobras" },
        { value: 8, text: "admin" },
        { value: 4, text: "sergi.serrano.casalins" },
        { value: 7, text: "quim.motger" },
        { value: 3, text: "victtortomas1997" },
        { value: 1, text: "slasobra" },
      ],
      assigneeSelected: null,
      optionsKind: [
        { value: 'B', text: 'Bug' },
        { value: 'E', text: 'Enhancement' },
        { value: 'P', text: 'Proposal' },
        { value: 'T', text: 'Task' }
      ],
      kindSelected: "B",
      optionsPriority: [
        { value: 'BL', text: 'Blocker' },
        { value: 'CR', text: 'Critical' },
        { value: 'MA', text: 'Major' },
        { value: 'MI', text: 'Minor' },
        { value: 'TR', text: 'Trivial' }
      ],
      prioritySelected: "BL",
      dismissSecs: 5,
      dismissCountDown: 0,
      actualPage:''
    };
  },
  mounted: function() {
    this.actualPage = this.$route.name
    if (this.$route.name == 'Edit Issue') {
      api.getIssueById(this.$route.params.id, this.token).then(response => {
        this.titleText = response.title
        this.descriptionText = response.description
        this.assigneeSelected = response.assignee
        this.kindSelected = response.kind
        this.prioritySelected = response.priority
      })
    }
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
    toList: function() {
      if (this.$route.name == 'New issue') {
        this.$router.push("/issues");
      }
      else {
        this.$router.push("/issues/"+this.$route.params.id);
      }
    },
    newIssue: function() {
      if(this.titleText != '') {
        const body = {
            title: this.titleText,
            description: this.descriptionText,
            kind: this.kindSelected,
            priority: this.prioritySelected,
            assignee: this.assigneeSelected
        }
        api.postIssue(body, this.token).then(response => {
            this.$router.push("/issues/"+response.id)
        })
      }
      else {
        this.showAlert()
      }
    },
    editIssue: function() {
      if(this.titleText != '') {
        const body = {
            title: this.titleText,
            description: this.descriptionText,
            kind: this.kindSelected,
            priority: this.prioritySelected,
            assignee: this.assigneeSelected
        }
        api.putIssueById(this.$route.params.id ,body, this.token).then(response => {
            this.$router.push("/issues/"+response.id)
        })
      }
      else {
        this.showAlert()
      }
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
};
</script>

<style scoped>
.layout {
  margin: 50px 50px 50px 120px;
  overflow: hidden;
}
.required {
  color: red;
  font-size: 8pt;
}
.text-row {
  display: flex;
  float: right;
}
.button {
  width: 100%;
}
.btn-create {
  background-color: var(--navbar-color);
}
.btn-create:hover {
  border-color: var(--navbar-color);
  background-color: white;
  color: var(--navbar-color);
}
.alert-fail {
  width: 400px;
  float: right;
}
</style>