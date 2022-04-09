<template>
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
            <li><router-link to="/ContactUs" class="nav-link" v-show="!user">Contact</router-link></li>
            <li><router-link to="/Login" class="nav-link" v-show="!user">Login</router-link></li>
            <li class="nav-item">
              <router-link :to="this.healthSummary" class="nav-link" v-show="user">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Appointment" class="nav-link" v-show="user">Appointment</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-if="user">
                Profile
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown" v-if="user">
                <li ><router-link class="dropdown-item" :to="this.historical">Historical Data</router-link></li>
                <li><router-link to="/ContactUs" class="dropdown-item">Contact</router-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="logOut()">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"

export default {
  name: "ClientNavBar",
  data() {
    return {
      user: false,
      healthSummary: "/HealthSummary/",
      historical: "/HistoricalData/"
    }
  },
  methods: {
    logOut() {
      const auth = getAuth();
      const user = auth.currentUser
      signOut(auth, user)
      this.user = false
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
        this.healthSummary+=user.uid
        this.historical+=user.uid
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
