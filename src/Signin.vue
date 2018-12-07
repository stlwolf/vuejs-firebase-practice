<template lang="html">
  <div id="firebaseui-auth-container" />
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";

export default {
  name: "Signin",
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        /* eslint-disable no-unused-vars */
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        }
        /* eslint-disable no-unused-vars */
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInOptions: [
        // List of OAuth providers supported.
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      // Other config options...
      signInSuccessUrl: "https://${project-name}/mypage"
    });
  }
};
</script>

<style scoped>
</style>
