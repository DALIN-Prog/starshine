<template>
    <UserNavBar />
    <NewDataForm/>
</template>

<script>
import NewDataForm from '../components/NewDataForm.vue'
import UserNavBar from "../components/UserNavBar.vue";

export default {
    name: 'ResidentHealthDataEntry',

    components: {
        NewDataForm,
        UserNavBar
    }
}
</script>

<style scoped>

</style>