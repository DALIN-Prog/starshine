<template>
  <UserNavBar />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Account Creation</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input id="name" type="name" class="form-control" name="name" value required autofocus v-model="form.name"/>
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" required autofocus v-model="form.email"/>
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right" >Password</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" required v-model="form.password" />
                </div>
              </div>

              <div class="form-group row">
                <label for="contact" class="col-md-4 col-form-label text-md-right" >Contact</label>

                <div class="col-md-6">
                  <input id="contact" type="contact" class="form-control" name="contact" required autofocus v-model="form.contact" />
                </div>
              </div>

              <div class="form-group row">
                <label for="BedNumber" class="col-md-4 col-form-label text-md-right">Bed Number</label>

                <div class="col-md-6">
                  <input id="Bed Number" type="Bed Number" class="form-control" name="Bed Number" required autofocus v-model="form.BedNumber"/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary" v:on-click="submit()">
                    Register
                  </button>
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
import UserNavBar from "../components/UserNavBar.vue";
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
//import { doc, collection, getDocs, setDoc, query } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "AccountCreation",
  components: {
    UserNavBar,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        contact: "",
        bedNumber: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      db.collection("User")
        .doc(this.form.user)
        .set({
          name: this.form.name,
          email: this.form.email,
          contact: this.form.contact,
          bedNumber: this.form.bedNumber,
          createdOn: new Date(),
        })
        .then(() => {
          console.log("user updated!");
          alert("form submitted");
        });
      //console.log("Document written with ID: ", docRef.id);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {});
          alert("Account successfully created!");
        })
        .catch((err) => {
          this.error = err.message;
          alert("Account could not be created due to some error.");
        });

      /*db.collection("User")
        .add({
          name: this.form.name,
          email: this.form.email,
          contact: this.form.contact,
          bedNumber: this.form.bedNumber,
          createdOn: new Date(),
        })
        .catch((err) => {
          this.error = err.message;
          alert("unsuccessful form submission");
        });*/
      /*db.ref("User/").set({
        name: this.form.name,
        email: this.form.email,
        contact: this.form.contact,
        bedNumber: this.form.bedNumber,
      });*/
    },
  },
};
</script>

<style scoped>
  .container {
    position: relative;
    top: 50%;
    transform: translateY(50%);
    width: 1000px;
    border-color: black;
    border-width: 1px;
  }
  .card-header {
    background-color: #292b2c;
    color: azure;
  }
  .form-control {
    margin-bottom: 10px;
    border-color: #292b2c;
    border-width: 1px;
  }
</style>