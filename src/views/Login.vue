<template>
    <UserNavBar/>
    <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ error }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="container">
        <div class="row">
            <h2 class="title mt-5">Welcome back!</h2>
        </div>
    </div>
    <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><br></div>
          <div class="card-body">
            
            <form action="#" @submit.prevent="submit">
              <div class="form-group row mt-4 mb-4">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" v-model="form.email" placeholder="patient@starshine.com" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="password" class="col-md-4 col-form-label text-md-right" aria-placeholder="patient@starshine.com">Password</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="form.password" placeholder="Password" required/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary" v-on:click="submit">
                    Login
                  </button>
                  <router-link class="btn btn-outline-info ms-2" to="/AccountCreation">Register</router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../uifire.js";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
import UserNavBar from "../components/UserNavBar.vue"

export default {
    name: "Login",
    components: {
        UserNavBar
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            error: null,
        }
    },
    methods: {
        submit() {
            firebase.auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => {
                this.$router.push("/")
            })
            .catch((err) => {
                this.error = err.message;
            });
            
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');

.title {
    text-align: center;
    font-family: Merriweather;
}

h1 {
    margin-top: 56px;
}
</style>