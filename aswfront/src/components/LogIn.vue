<template>
  <div>
    <button @click="authenticate('google')">auth google</button>
    <p>{{user}}</p>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  components: {},
  data: function() {
    return {
        user: []
    };
  },
  methods: {
    authenticate: function(provider) {
      this.$auth.authenticate(provider).then(result => {
        return result
      });
    }
  }
};
</script>