<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-light"
    style="background-color: #e3f2fd">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Starshine Center</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/AccountCreation" class="nav-link"
              >Create Account</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
        </ul>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Starshine Center</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" v-if="!user">
              <router-link to="/ContactUs" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item" v-if="user && admin">
              <router-link to="/ResidentManagement" class="nav-link">Manage</router-link>
            </li>
            <li class="nav-item" v-if="user && !admin">
              <router-link to="/HealthSummary" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="user">
              <router-link to="/Appointment" class="nav-link">Appointment</router-link>
            </li>
            <li class="nav-item dropdown" v-if="user">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li v-if="!admin"><router-link class="dropdown-item" to="/HistoricalData">Historical Data</router-link></li>
                <li v-if="admin"><router-link class="dropdown-item" to="/AccountCreation">Create Account</router-link></li>
                <li><router-link to="/ContactUs" class="dropdown-item">Contact</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="logOut()">Logout</a></li>
              </ul>
            </li>
            <li class="nav-item" v-else>
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "UserNavBar",
  data() {
    return {
      user: false,
      admin: false
    }
  },
  methods: {
    logOut() {
      const auth = getAuth();
      const user = auth.currentUser
      signOut(auth, user)
      this.$router.push({
        name: "LandingPage"
      })
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async user => {
      if (user) {
        this.user = auth.currentUser // set user to current user)
        let documents = await getDocs(collection(db, "User"))
        documents.forEach((docs) => {
        let data = docs.data()
        if (docs.id === this.user.uid) {
            //console.log(data)
            this.admin = data.isAdmin
            //console.log(this.user);
        }
      })
      }
    })
  },

    
}


    
</script>

<style scoped>
.navbar-brand {
  font-family: "Sacramento", sans-serif;
}
</style>
