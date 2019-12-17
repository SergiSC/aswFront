<template>
  <b-container fluid>
    <div class="comment">
      <b-row align-v="center">
        <b-col cols="3">
          <img
            v-if="auto"
            class="col-xs-1 center-block"
            src="https://image.flaticon.com/icons/png/512/965/965477.png"
            alt
            height="50px"
            width="50px"
          />
          <img
            v-else
            src="https://image.flaticon.com/icons/png/512/1361/1361728.png"
            alt
            height="50px"
            width="50px"
          />
        </b-col>
        <b-col cols="9">
          <p class="my-2 ml-2 p-autor">{{author}}</p>
          <p style="display:flex" class="mt-2 mb-4 ml-2">{{text}}</p>
          <b-row class="low-comment my-1">
              <b-button class="mx-2 button-edit">Edit</b-button>
              <b-button class="mx-2" variant="outline-danger">Delete</b-button>
              <p class="p-date ml-2 mr-4 my-auto">{{commentDate}}</p>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "comment",
  props: {
    id: Number,
    auto: Boolean,
    text: String,
    author: Number,
    created: String
  },
  data: function() {
      return {
          commentDate: ""
      }
  },
  mounted: function() {
      this.commentDate = new Date(this.created).toString().split(' GMT')[0]
  }
};
</script>

<style scope>
.comment {
  border-bottom: 1px dotted var(--navbar-color);
}
.p-date {
    font-weight: bold;
    font-size: 9pt;
}
.low-comment {
    display: flex;
    float: right;
}
.p-autor {
    display:flex;
    color: var(--navbar-color);
    font-size: 12pt;
    font-weight: bold;
}
.button-edit {
    border-color: var(--navbar-color);
    background-color: var(--navbar-color);
    color: white;
}
.button-edit:hover, .button-edit:focus {
    border-color: var(--navbar-color);
    background-color: white;
    color: var(--navbar-color);
}
</style>