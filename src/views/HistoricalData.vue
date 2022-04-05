<template>
    <UserNavBar/>
    <div class="container">
        <div class="row">
            <h2 id="title" style="text-align:center">{{this.user.uid}}'s Past Data</h2>
            <router-link class="btn btn-outline-primary btn-lg" v-on:click="addVitals()">Add Vital Points</router-link>
        </div>
    </div>

    <div id="histTable">
        <table id="table table-striped table-sm">
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
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
/* import { getFirestore } from "firebase/firestore"; */
import { collection, getDocs, /* doc, deleteDoc, */ getFirestore, query, where} from "firebase/firestore";

const db = getFirestore(firebaseApp);

import UserNavBar from '@/components/UserNavBar.vue'

export default {
    name: "HistoricalData",
    components: {
        UserNavBar
    },

    data() {
        return {
            /* fbuser:"", */
            user: false,
        }
    },

    mounted() {
        const auth = getAuth();

        this.fbuser = auth.currentUser;
        this.display(this.fbuser.uid);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    },

    methods: {
        async display(user) {
            const q = query(collection(db, "VitalPoint"), where("residentID", "==", String(user)));
            /* let z = await getDocs(collection(db, "VitalPoint")) */
            let z = await getDocs(q)
            let ind = 1

            z.forEach((docs) => {
                console.log(docs.id)

                let yy = docs.data()
                var table = document.getElementById("table")
                var row = table.insertRow(ind)

                var name = (yy.residentID)
                var date = (yy.lastUpdated)
                var bloodp = (yy.bloodPressure)
                var temp = (yy.temperature)
                var hrate = (yy.heartRate)
                var respRate = (yy.respiratoryRate)
                var image = (yy.image)
                var createBy = (yy.created)

                var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3); var cell5 = row.insertCell(4); var cell6 = row.insertCell(5);
                var cell7 = row.insertCell(6); var cell8 = row.insertCell(7); var cell9 = row.insertCell(8);     

                cell1.innerHTML = name; cell2.innerHTML = date; cell3.innerHTML = bloodp; cell4.innerHTML = temp; 
                cell5.innerHTML = hrate; cell6.innerHTML = respRate; cell7.innerHTML = image; cell8.innerHTML = createBy; cell9.innerHTML = 0;
                
                /* var bu = document.createElement("button")
                bu.className = "bwt"
                bu.id = String(name)
                bu.innerHTML = "Delete"
                /* bu.innerHTML = <img src="bin.png"/>
                bu.onclick = ()=>{
                    this.deleteinstrument(name,user)
                }
                cell9.appendChild(bu) */

                ind+=1
            })
            /* const displayName = this.fbuser.displayName; */
            /* const email = user.email; */ 
            
            /* try{
                const docRef = await setDoc(doc(db, "VitalPoint", ""))
            }
            catch(error) {
                console.error("Error adding document: ", error);
            } */

        },

        async addVitals(){
            if (confirm("Going to add vital page for resident")) {
                this.$router.push('DataEntry')
            }

        },

        /* async deleteinstrument(name,user){      
            alert("You are going to delete info for " + name)
            await deleteDoc(doc(db,user,name))
            let tb = document.getElementById("histTable")
            //delete everything, make data empty and call the display again
            while (tb.rows.length >1){
                tb.deleteRow(1)
            }
            this.display(this.fbuser)
        } */

    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');
    #title {
        font-family: Merriweather;
        margin: 16px 0 16px 0;
    }
    
    #histTable {
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