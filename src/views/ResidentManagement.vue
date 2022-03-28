<template>
    <UserNavBar/>
    <h2 class="pageName">Resident Management</h2>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 appt-card">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Appointments</h5>
                    <p class="card-text text-center fs-3 fw-bold">Value</p>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Residents</h5>
                    <p class="card-text text-center fs-3 fw-bold">Value</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div class="resTable">
        <table class="table table-striped table-sm">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Blood Pressure</th>
            <th scope="col">Heart Rate</th>
            <th scope="col">Floor-Room Bed</th>
            <th scope="col">Conditions</th>
            <th scope="col">Admitted</th>
            <th scope="col">Updated At</th>
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
    name: "ResidentManagement",
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
    .appt-card {
        margin-left: 208px;
    }

    .card {
        margin: 0 auto
    }
    .pageName{  
        font-family: Merriweather;
        margin-left: 12px;
    }
    
    .top{
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 5px 20px;
        padding: 20px;
    }

    #titleOfPage{
        display: inline-block;
        text-align: center;
        float: left;
        background-color:rgb(197, 230, 252);
        color: black;
        padding: 20px;
        border-radius: 15px;
    }

    #icon{
        width:75px;
        height:75px;
        float:left;
    }

    #appt, #res{
        display: inline-block;
        text-align: center;
        font-weight: bold;
        background-color: white;
        padding: 20px;
        margin: 10px 25px 10px 25px;
        box-shadow: 3px 3px rgba(159, 163, 165, 0.651);
        border-radius: 15px;
    }

    .searchInput{
        border-color: rgb(211, 211, 211);
        margin: 45px 25px 10px 0px;
        padding: 5px 20px;
        border-radius: 5px;
    }

    #searchBtn{
        margin: 1px;
        padding: 1px 10px;
        color: rgb(91, 180, 131);
        border-color: rgb(91, 180, 131);
        border-radius: 5px;
        font-size: 100%;
    }

    #searchBtn:hover{
        box-shadow: 1px 1px rgb(91, 180, 131);
    }

    .resTable {
        display: grid;
        grid-gap: 20px;
        border-collapse:collapse;
        box-shadow: 2px solid rgb(120, 147, 179);
        margin: 25px;
        text-align: center;
    }

    th, td {
    border: 1px solid #dddddd;
    padding: 15px;
}

    tr:nth-child(even){
        background-color: rgb(198, 229, 238);
    }

</style>