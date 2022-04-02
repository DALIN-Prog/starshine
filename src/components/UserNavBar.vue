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
            <li class="nav-item" v-if="!user">
              <router-link to="/ContactUs" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item" v-if="user">
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
                <li><router-link class="dropdown-item" to="/HistoricalData">Historical Data</router-link></li>
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
    </nav>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
export default {
  name: "UserNavBar",
  data() {
    return {
      user: false
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
    onAuthStateChanged(auth, user => {
      this.user = user;
      })
  },

    
}
</script>

<style scoped>
  .navbar-brand {
    font-family: "Sacramento", sans-serif;
  }
</style>