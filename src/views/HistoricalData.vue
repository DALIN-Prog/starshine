<template>
    <UserNavBar/>
    <div class="container">
        <div class="row">
            <h2 id="title" style="text-align:center">{{this.user.uid}}'s Past Data</h2>
            <router-link class="btn btn-outline-primary btn-lg" to="#">Add Vital Points</router-link>
        </div>
    </div>

    <div class="histTable">
        <table class="table table-striped table-sm">
        <thead>
            <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Blood Pressure</th>
            <th scope="col">Temperature</th>
            <th scope="col">Heart Rate</th>
            <th scope="col">Respiratory Rate</th>
            <th scope="col">Image</th>
            <th scope="col">Created By</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        
        </table>
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
                this.user = auth.currentUser;
            }
        })
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');
    #title {
        font-family: Merriweather;
        margin: 16px 0 16px 0;
    }

    
    .histTable {
        grid-gap: 20px;
        border-collapse:collapse;
        margin:/*  70px  */25px;
        text-align: center;
    }
    thead{
        background-color:rgb(99, 98, 119);
        color: white;
    }
    th, td {
    /* border: 1px solid #dddddd; */
    padding: 15px;
    background-color: grey;
    }

    tr:nth-child(even){
        background-color: rgb(198, 229, 238);
    }

</style>