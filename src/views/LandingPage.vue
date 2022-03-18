<template>
    <UserNavBar/>
    <h1>Landing page</h1>
</template>

<script>
import UserNavBar from "../components/UserNavBar.vue"
export default {
    name: "LandingPage",
    components: {
        UserNavBar
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