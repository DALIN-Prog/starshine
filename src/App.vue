<template>
  <UserNavBar/>
</template>

<script>
import UserNavBar from "./components/UserNavBar.vue"

export default {
  name: 'App',
  components: {
   UserNavBar
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
