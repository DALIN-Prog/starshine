<template>
<AdminNavBar/>
<div class="container">
        <div class="row">
            <h2 id="title" style="text-align:center">Appointment</h2>
        </div>
</div>
<div id="main" class="ml-4">

<div class="container mb-8">
    <div>
        <h2 class="header2">Generate visiting slots</h2>
        <label class="me-2" for="date1">Enter the date:</label>
        <input type="text" id="date1" required="" placeholder="YYYY-MM-DD">
        <button class="btn btn-primary ms-3" id="generate" type="button" v-on:click="generateSlots()">Generate</button>
    </div>
</div>

<div class="container mt-4">
    <table class="table table-striped table-hover" id="table1">
        <h4>Booked slots:</h4>
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">date</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
    </table>
</div>

<div class="container mt-4">
    <table class="table table-striped table-hover" id="table2">
        <h4>Available slots:</h4>
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">date</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
    </table>
</div>

</div>
</template>

<script>
import firebaseApp from '../firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
import {doc, addDoc, deleteDoc, updateDoc} from "firebase/firestore"
import {collection, getDocs} from "firebase/firestore"
import AdminNavBar from '@/components/AdminNavBar.vue'
const db = getFirestore(firebaseApp)

export default {
    data() {
        return {
            user: false,
        };
    },
    components: {
        AdminNavBar
    },
    methods:{
        getSlots: async function () {
            let a = await getDocs(collection(db, "Appointment"))
            let ind = 1
            a.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table1")

                var id = (docs.id)
                var date = (yy.date)
                var start = (yy.starttime)
                var end = (yy.endtime)
                var name = (yy.name)

                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; 
                var yyyy = today.getFullYear();
                if(dd<10) {
                    dd='0'+dd;} 
                if(mm<10) {
                    mm='0'+mm;} 
                today = yyyy+'-'+mm+'-'+dd;

                if (date>=today && name!=="NA") { // if the date >= now && name === "NA"

                var row = table.insertRow(ind)

                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)

                cell1.innerHTML = ind
                cell2.innerHTML = name
                cell3.innerHTML = date
                cell4.innerHTML = start
                cell5.innerHTML = end
                

                var bu = document.createElement("button")
                bu.className="btn btn-sm btn-danger"
                bu.innerHTML="Unbook"
                bu.addEventListener("click", () => {
                    this.delete(id);
                });
                cell6.appendChild(bu)
                ind+=1
                }
            })
        },
        avaiSlots: async function () {
            let a = await getDocs(collection(db, "Appointment"))
            let ind = 1
            a.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table2")

                var date = (yy.date)
                var start = (yy.starttime)
                var end = (yy.endtime)
                var name = (yy.name)
                var id = (docs.id)

                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; 
                var yyyy = today.getFullYear();
                if(dd<10) {
                    dd='0'+dd;} 
                if(mm<10) {
                    mm='0'+mm;} 
                today = yyyy+'-'+mm+'-'+dd;

                if (date>=today && name==="NA") { // if the date >= now && name === "NA"

                var row = table.insertRow(ind)

                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)

                cell1.innerHTML = ind
                cell2.innerHTML = name
                cell3.innerHTML = date
                cell4.innerHTML = start
                cell5.innerHTML = end

                var bu = document.createElement("button")
                bu.className="btn btn-sm btn-danger"
                bu.innerHTML="Remove"
                bu.addEventListener("click", () => {
                    this.deleteSlot(id);
                });
                cell6.appendChild(bu)
            
                ind+=1
                }
            })
        },
        delete: async function(id) {
            alert("You are going to delete this appointment booked by your client.")
            await updateDoc(doc(db, "Appointment", id), {
                name: "NA"
            });
            location.reload()
        },
        deleteSlot: async function(id){
            alert("You are going to delete this visiting slot.")
            await deleteDoc(doc(db, "Appointment", id))
            location.reload()
        },
        generateSlots: async function(){
            var date1 = document.getElementById("date1").value
            alert("You are going to generate visiting slots in " + date1)

            var start1 = "10:00"
            var end1 = "12:00"
            var start2 = "12:00"
            var end2 = "14:00"
            var start3 = "14:00"
            var end3 = "16:00"
            var start4 = "16:00"
            var end4 = "18:00"
            
            const docRef = collection(db, "Appointment");

            const slot1 = await addDoc(docRef, {
                name:"NA",
                starttime:start1,
                endtime:end1,
                date:date1,
            })
            console.log(slot1.id)
            // await updateDoc(doc(db, "Appointment", slot1.id), {
            //     id: slot1.id
            // });

            const slot2 = await addDoc(docRef, {
                name:"NA",
                starttime:start2,
                endtime:end2,
                date:date1,
            })
            console.log(slot2.id)
            // await updateDoc(doc(db, "Appointment", slot2.id), {
            //     id: slot2.id
            // });

            const slot3 = await addDoc(docRef, {
                name:"NA",
                starttime:start3,
                endtime:end3,
                date:date1,
            })
            console.log(slot3.id)
            // await updateDoc(doc(db, "Appointment", slot3.id), {
            //     id: slot3.id
            // });

            const slot4 = await addDoc(docRef, {
                name:"NA",
                starttime:start4,
                endtime:end4,
                date:date1,
            })
            console.log(slot4.id)
            // await updateDoc(doc(db, "Appointment", slot4.id), {
            //     id: slot4.id
            // });
            location.reload()
        }
    },
    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
          if (user) {
            this.user = auth.currentUser // set user to current user)
          }
        })
        this.getSlots()
        this.avaiSlots()
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');
#title, .header2 {
    font-family: Merriweather;
    margin: 16px 0 16px 0;
}
</style>