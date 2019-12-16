<template>
  <div class="layout">
    <NavBar></NavBar>
    <b-container fuild>
      <b-row>
        <b-col>
          <h1 style="display: flex;">Issues</h1>
          <h5 style="display: flex; font-weight: bold">Create issue</h5>
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
          <b-button class="button btn-create" @click="newIssue()">Create Issue</b-button>
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
import global from "../services/global.js";
export default {
  name: "CreateEdit",
  components: { NavBar },
  data: function() {
    return {
      titleText: "",
      descriptionText: "",
      optionsAssignee: [
        { value: null, text: '--' },
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
      all:{}
    };
  },
  methods: {
    toList: function() {
      this.$router.push("/issues");
    },
    newIssue: function() {
        const body = {
            title: this.titleText,
            description: this.descriptionText,
            kind: this.kindSelected,
            priority: this.prioritySelected,
            assignee: this.assigneeSelected
        }
        this.all = body
        api.postIssue(body, global.data().token).then(response => {
            this.$router.push("/issues/"+response)
        })
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
</style>