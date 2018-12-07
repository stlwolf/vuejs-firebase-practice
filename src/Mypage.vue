<template>
  <div id="container">
    <div id="user">
      <div id="image">
        <img 
          :src="photo" 
          style="height: 120px">
      </div>
      <div id="profile">
        <p>{{ name }}</p>
        <p>{{ email }}</p>
      </div>
    </div>
    <div style="display: flex; justify-content: center"><button @click="logOut">Log out</button></div>
  </div>
</template>

<script>
import firebase from "firebase";
import * as drift from "./drift";

export default {
  name: "Mypage",
  data() {
    return {
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {}
    };
  },
  created() {
    let vm = this;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        vm.user = user;
        vm.name = vm.user.displayName;
        vm.email = vm.user.email;
        vm.photo = vm.user.photoURL;
        vm.userId = vm.user.uid;

        drift.load(vm.userId, vm.name, vm.email);
      }
    });
  },
  methods: {
    logOut() {
      drift.unload();
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
#user {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  padding-left: 10px;
}
</style>
