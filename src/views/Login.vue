<template>
  <UserNavBar />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    v-on:click="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--div id="firebaseui-auth-container"></div-->
  </div>
</template>

<script>
import firebase from "../uifire.js";
import "firebase/compat/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import UserNavBar from "../components/UserNavBar.vue";
export default {
  name: "Login",
  components: {
    UserNavBar,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        //.then(())
        .catch((err) => {
          this.error = err.message;
          alert("Please Try Again.");
        });
      alert("check!");
    },
  },
  mounted() {
    //calling the ui instance
    var ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      //We only need to create the instance only one time
      //Initialize the FirebaseUI widget using Firebase
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

    var uiconfig = {
      signInSuccessURL: "/LandingPage",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };
    ui.start("#firebaseui-auth-container", uiconfig);
  },
};
</script>

<style scoped>
h1 {
  margin-top: 56px;
}
</style>
