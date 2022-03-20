<template>
    <UserNavBar/>
    <AboutUs/>
</template>

<script>
import UserNavBar from "../components/UserNavBar.vue"
import AboutUs from "../components/AboutUs.vue"
export default {
    name: "LandingPage",
    components: {
        UserNavBar,
        AboutUs
    },
    methods: {

    }
    
}
</script>

<style scoped>
    h1 {
        margin-top: 56px;
    }
</style>