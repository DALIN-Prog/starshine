<template>
    <UserNavBar/>
    <h1 id="title"><!-- {{this.user}} --> Past Data</h1>
    <button>Add</button>
    <div class="table">

    </div>





</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserNavBar from '@/components/UserNavBar.vue'

export default {
    name: "HistoricalData",
    components: {
        UserNavBar
    },

    data () {
        return {
            user:false,
        }
    },

    mounted () {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }

}
</script>

<style>
    button{
        padding: 1px 20px;
        background-color: rgb(19, 130, 233);
        color: white;
        border-radius: 10px;
        font-size: 150%;
    }
</style>