<template>
    <UserNavBar/>
    <h2 class="pageName">Resident Management</h2>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Appointments</h5>
                    <p class="card-text text-center fs-3 fw-bold">{{totalAppt}}</p>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Residents</h5>
                    <p class="card-text text-center fs-3 fw-bold">{{totalRes}}</p>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div class="resTable">
        <table class="table" id="table">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Floor-Room Bed</th>
            <th scope="col">Conditions</th>
            <th scope="col">Admitted</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        
        </table>
    </div>

</template>

<script>
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseApp);
import UserNavBar from '@/components/UserNavBar.vue'

export default {
    name: "ResidentManagement",
    components: {
        UserNavBar
    },

    data () {
        return {
            user: false,
            totalAppt: 0,
            totalRes: 0,
            userArr: []
        }
    },

    mounted () {
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
            if (user) {
                this.user = auth.currentUser // set user to current user)
                let documents = await getDocs(collection(db, "User"))
                documents.forEach((docs) => {
                    if (!docs.data().isAdmin) {
                        this.userArr.push(docs)
                        this.totalRes++;
                    }
                })
                let index = 1
                this.userArr.sort(this.compareName)
                this.userArr.forEach((obj) => {
                    var table = document.getElementById("table")
                    var row = table.insertRow(index)
                    var indexCell = row.insertCell(0); var nameCell = row.insertCell(1); var phoneCell = row.insertCell(2); 
                    var bedCell = row.insertCell(3); var condiCell = row.insertCell(4); var admitCell = row.insertCell(5); 
                    var actionsCell = row.insertCell(6);
                    indexCell.innerHTML = index;
                    nameCell.innerHTML = obj.data().name
                    phoneCell.innerHTML = obj.data().phone
                    bedCell.innerHTML = obj.data().bedNumber;
                    condiCell.innerHTML = "condition" //obj.data().condition;
                    admitCell.innerHTML = obj.data().createdAt.toDate().toDateString().slice(4) + " " + obj.data().createdAt.toDate().toLocaleTimeString('en-US');
                    const edit = "<router-link id='view-" + obj.id + "' type='button' class='btn btn-primary btn-sm'>View</button>"
                    actionsCell.innerHTML = edit;
                    var btnView = document.getElementById("view-" + obj.id)
                    btnView.addEventListener("click", () => {
                        this.viewData(obj.id);
                    });
                    index++
                })

            }

        })
    },
    methods: {
        compareName: function (a, b) {
            if(a.data().name < b.data().name) { return -1; }
            if(a.data().name > b.data().name) { return 1; }
            return 0;
        },
        viewData: function (id) {
            this.$router.push("/HealthSummary/" + id)
        }
    }
}
</script>

<style scoped>
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