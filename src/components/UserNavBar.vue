<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
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
            <li class="nav-item">
              <router-link to="#" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "UserNavBar",
  methods: {

  }

    
}
</script>

<style scoped>
  .navbar-brand {
    font-family: "Sacramento", sans-serif;
  }
</style>