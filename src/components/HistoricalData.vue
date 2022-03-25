<template>
    <UserNavBar/>
    <div class="topRow">
        <h1 id="title" style="text-align:center"><!-- {{this.user}} -->'s Past Data</h1>
        <button id="addBtn" v-on:click="stop">Add</button>
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
                this.user = user;
            }
        })
    }

}
</script>

<style>
    .topRow{
        display: grid;
        grid-template-columns: 90% 10%;
        /* float: right; */
        margin: 25px;
        
        /* position: fixed; */
    }
    #addBtn{
        padding: 1px 20px;
        background-color: rgb(19, 130, 233);
        color: white;
        border-radius: 10px;
        font-size: 150%;
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