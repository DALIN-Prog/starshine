<template>
<UserNavBar/>
<div id="main" class="ml-4">
  <h1>Appointment</h1>
  <div id="div1">
    <h4>Please select a date of visit:</h4>
      <label for="date1">Visit Date: </label>
      <input type="text" id="date1" required="" placeholder="YYYY-MM-DD"> <br><br>
      <button type="button" id="search" v-on:clock="search()">Filter</button>
  </div>
  <div id="div2">
      <h4>Available slots:</h4>
      <table id="table">
          <tr>
              <th>No.</th>
              <th>ID</th>
              <th>date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Option</th>
          </tr>
      </table>
  </div>

  <div>
      <h4>My appointment:</h4>
      <table id="table1">
          <tr>
              <th>No.</th>
              <th>ID</th>
              <th>Name</th>
              <th>date</th>
              <th>Start time</th>
              <th>End time</th>
              <th>Option</th>
          </tr>
      </table>
  </div>
</div>
</template>

<script>
import firebaseApp from '../firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {doc, setDoc, updateDoc} from "firebase/firestore"
import {collection, getDocs} from "firebase/firestore"
import UserNavBar from '@/components/UserNavBar.vue'
const db = getFirestore(firebaseApp)

export default {
    data() {
        return {
            enter:'',
            user: false,
            username:""
        };
    },
    components: {
        UserNavBar
    },
    methods:{
        search: function(){
            console.log(document.getElementById("date1").value)
            this.enter=document.getElementById("date1").value // 2022-04-11

        },
        getSlots: async function () {
            let a = await getDocs(collection(db, "Appointment"))
            let ind = 1
            a.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table")

                var id = (yy.id)
                var date = (yy.date)
                var start = (yy.starttime)
                var end = (yy.endtime)
                var name = (yy.name)

                if (name==="NA") { // if the date >= now && name === "NA"

                var row = table.insertRow(ind)

                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)

                cell1.innerHTML = ind
                cell2.innerHTML = id
                cell3.innerHTML = date
                cell4.innerHTML = start
                cell5.innerHTML = end

                var bu = document.createElement("button")
                bu.className="bwt"
                bu.innerHTML="Book"
                bu.addEventListener("click", () => {
                    this.book(id);
                    this.refresh()
                });
                cell6.appendChild(bu)
                ind+=1
                }
            })
        },
        book: async function(id) {
            alert("You are going to make an appointment")
            await updateDoc(doc(db, "Appointment", id), {
                name: this.username
            });
        },
        mySlots: async function () {
            let a = await getDocs(collection(db, "Appointment"))
            let ind = 1
            a.forEach((docs) => {
                let yy = docs.data()
                var table = document.getElementById("table1")

                var id = (yy.id)
                var date = (yy.date)
                var start = (yy.starttime)
                var end = (yy.endtime)
                var name = (yy.name)

                if(name=== this.username) {

                var row = table.insertRow(ind)

                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                var cell5 = row.insertCell(4)
                var cell6 = row.insertCell(5)
                var cell7 = row.insertCell(6)

                cell1.innerHTML = ind
                cell2.innerHTML = id
                cell3.innerHTML = name
                cell4.innerHTML = date
                cell5.innerHTML = start
                cell6.innerHTML = end

                var bu = document.createElement("button")
                bu.className="bwt"
                bu.innerHTML="Cancel"
                bu.onclick = function(){
                    this.cancel(id)
                    this.refresh()
                }
                cell7.appendChild(bu)
                ind+=1
                }
            })
        },
        cancel: async function (id) {
            var a = id
            alert("You are going to cancel the appointment")
            const app = doc(db, 'Appointment', a);
            setDoc(app, { name: "NA" }, { merge: true });

        },
        refresh: function refresh(){
            let tb = document.getElementById("table")
            while(tb.rows.length>1){
                tb.deleteRow(1)
            }
            let tb1 = document.getElementById("table1")
            while(tb1.rows.length>1){
                tb1.deleteRow(1)
            }
            this.getSlots()
            this.mySlots()
        }
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
#picker{
    width: 700px;
}
table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 700px
}
tr:nth-child(even) {
    background-color: #e3edee;
}
th,td{
    border: 1px solid #dddddd;
    text-align: center;
    padding:8px
}

</style>