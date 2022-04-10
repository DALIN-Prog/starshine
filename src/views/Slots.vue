<template>
<ClientNavBar/>
<div class="container">
        <div class="row">
            <h2 id="title" style="text-align:center">Make an appointment to visit our residents</h2>
        </div>
</div>

<div class="container">
    <table class="table table-striped table-hover" id="table">
        <h4>Available slots:</h4>
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">date</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
    </table>
</div>

<div class="container">
    <table class="table table-striped table-hover" id="table1">
        <h4>My appointment:</h4>
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
</template>

<script>
import ClientNavBar from '@/components/ClientNavBar.vue'
import firebaseApp from '../firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {doc, updateDoc} from "firebase/firestore"
import {collection, getDocs} from "firebase/firestore"
const db = getFirestore(firebaseApp)

export default {
    data() {
        return {
            user: false,
            username:""
        };
    },
    components: {
        ClientNavBar
    },
    methods:{
        getSlots: async function () {
            let a = await getDocs(collection(db, "Appointment"))
            let ind = 1
            a.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table")

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

                if (date>=today && name==="NA") { // if the date >= now && name === "NA"

                var row = table.insertRow(ind)

                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                var cell5 = row.insertCell(4)

                cell1.innerHTML = ind
                cell2.innerHTML = date
                cell3.innerHTML = start
                cell4.innerHTML = end

                var bu = document.createElement("button")
                bu.className="btn btn-sm btn-primary"
                bu.innerHTML="Book"
                bu.addEventListener("click", () => {
                    console.log(id)
                    this.book(id);
                });
                cell5.appendChild(bu)
                ind+=1
                }
            })
        },
        book: async function(id) {
            alert("You are going to make an appointment")
            await updateDoc(doc(db, "Appointment", id), {
                name: this.username
            });
            location.reload()
        },
        mySlots: async function () {
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

                if(date>=today && name=== this.username) {

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
                bu.className="btn btn-sm btn-secondary"
                bu.innerHTML="Cancel"
                bu.addEventListener("click", () => {
                    // console.log(id)
                    this.cancel(id);
                    // location.reload()
                });
                cell6.appendChild(bu)
                ind+=1
                }
            })
        },
        cancel: async function (id) {
            alert("You are going to cancel the appointment")
            await updateDoc(doc(db, "Appointment", id), {
                name: "NA"
            });
            location.reload()
            // console.log(id)
        },
    },
    mounted(){
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
          if (user) {
            this.user = auth.currentUser // set user to current user)
            let documents = await getDocs(collection(db, "User"))
            documents.forEach((docs) => {
                let data = docs.data()
                if (docs.id === this.user.uid) {
                    this.username = data.name
                    //console.log(this.username)
                }
            })
            this.getSlots()
            this.mySlots()
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

</style>