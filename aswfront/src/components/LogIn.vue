<template>
  <div>
    <button @click="authenticate('google')">auth google</button>
    <p>{{user}}</p>
  </div>
</template>

<script>
import api from "../services/apiService.js";
import global from "../services/global.js";
export default {
  name: "LogIn",
  components: {},
  data: function() {
    return {
        user: [],
        users: {}
    };
  },
  mounted: function() {
    this.getusers()
  },
  methods: {
    authenticate: function(provider) {
      this.$auth.authenticate(provider).then(result => {
        return result
      });
    },
    getusers: function() {
      api.getUsers(global.data().token).then(result => {
        global.setUsers(result)
        this.users = result
      })
    }
  }
};
</script>