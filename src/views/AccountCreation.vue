<template>
  <AdminNavBar />
  <div v-if="error" class="alert alert-danger">
    {{ error }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  <div class="container">
        <div class="row">
            <h2 class="title mt-5 mb-4">Account Creation</h2>
        </div>
    </div>

  <div class="container" v-if="!user">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><br></div>
          <div class="card-body">
            <form action="#" @submit.prevent="submit">

              <div class="form-group row mt-4 mb-4">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input id="username" type="text" class="form-control" name="username" v-model="form.name" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" v-model="form.email" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="password" class="col-md-4 col-form-label text-md-right" >Password</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" v-model="form.password" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="contact" class="col-md-4 col-form-label text-md-right" >Contact</label >

                <div class="col-md-6">
                  <input id="contact" type="text" class="form-control" name="contact" v-model="form.contact" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="condition" class="col-md-4 col-form-label text-md-right" >Condition</label >

                <div class="col-md-6">
                  <input id="condition" type="text" class="form-control" name="condition" v-model="form.condition" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="BedNumber" class="col-md-4 col-form-label text-md-right" >Bed Number</label>

                <div class="col-md-6">
                  <input id="Bed Number" type="text" class="form-control" name="Bed Number" v-model="form.bedNumber" required/>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                  <router-link class="btn btn-secondary ms-2" to="/login">
                    Back
                  </router-link>
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
import AdminNavBar from "../components/AdminNavBar.vue";
import firebase from "@/uifire.js";
import "firebase/compat/auth";
import "firebaseui/dist/firebaseui.css";
import firebaseApp from "../firebase.js";
import { getFirestore, serverTimestamp, setDoc, doc } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "AccountCreation",
  components: {
    AdminNavBar,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        contact: "",
        condition: "",
        bedNumber: "",
      },
      user: false,
      error: null,
    };
  },
  methods: {
    submit: async function () {
      if (this.form.name !== "" && 
          this.form.email !== "" && 
          this.form.password !== "" && 
          this.form.contact !== "" &&
          this.form.condition !== "" &&
          this.form.bedNumber !== "") {
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.form.email, this.form.password)
        const result = await createUser
        await setDoc(doc(db, "User", result.user.uid), {
          name: this.form.name,
          email: this.form.email,
          phone: this.form.contact,
          bedNumber: this.form.bedNumber,
          condition: this.form.condition,
          isAdmin: false,
          createdAt: serverTimestamp()
        }).then(() => {
          this.success = "User created successfully! Refresh the page to create another user."
          this.$router.push("/")
        }).catch(err => {
          this.error = err.message
        })
      } else {
        this.error = "Please fill up the form!"
      }
    }
  }
};
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
