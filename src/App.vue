<template>
  <!-- <!-<UserNavBar/> -->
  <ResMgmt/>
</template>

<script>
//import UserNavBar from "./components/UserNavBar.vue"
import ResMgmt from "./components/ResMgmt.vue"

export default {
  name: 'App',
  components: {
   //UserNavBar,
   ResMgmt
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
