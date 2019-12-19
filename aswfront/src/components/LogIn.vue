<template>
<b-container>
  <b-row style="margin-top:35%">
    <b-col>
      <b-button v-google-signin-button="clientId" class="google-signin-button my-auto"> LogIn with Google</b-button>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive';
import { mapActions } from "vuex";
export default {
  name: "LogIn",
  components: {},
  directives: {
    GoogleSignInButton
  },
  data: function() {
    return {
        clientId: '587974696907-guct3qjr505r1ok69vsukgttki815asq.apps.googleusercontent.com'
    };
  },
  mounted: function() {
    this.setTotalUsers()
  },
  methods: {
    ...mapActions({
      setTotalUsers: 'setTotalUsers',
      setInformationUser: 'setInformationUser'
    }),
    OnGoogleAuthSuccess (idToken) {
      this.setInformationUser(idToken)
      this.$router.push('home')
    },
    OnGoogleAuthFail (error) {
      this.error = error
    }
  }
};
</script>

<style scoped>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: auto;
}
</style>