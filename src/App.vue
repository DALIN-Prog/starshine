<template>
  <UserNavBar/>
  <AboutUs/>
</template>

<script>
import UserNavBar from "./components/UserNavBar.vue"
import AboutUs from "./components/AboutUs.vue"

export default {
  name: 'App',
  components: {
   UserNavBar,
   AboutUs
  },
  data() {
    return {
      formEntry:"",
      title: "yoy",
      nonsense:""
    }
  },
  methods: {
    change(x) {
      this.title = x
    }
  }
}
</script>

<style>
</style>
