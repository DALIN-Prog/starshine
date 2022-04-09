<template>
<UserNavBar/>
<div id="main" class="ml-4">
  <h1>Appointment</h1>

  <div>
      <h3>Generate visiting slots</h3>
      <label for="date1">Enter the date:</label>
      <input type="text" id="date1" required="" placeholder="YYYY-MM-DD">
      <button id="generate" type="button" v-on:click="generateSlots()">Generate</button>
  </div>

  <div>
      <h4>Booked slots:</h4>
      <table id="table1">
          <tr>
              <th>No.</th>
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
            user: false,
            username:""
        };
    },
    components: {
        UserNavBar
    },
    methods:{
        getSlots: async function () {
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

                cell1.innerHTML = ind
                cell2.innerHTML = date
                cell3.innerHTML = start
                cell4.innerHTML = end

                var bu = document.createElement("button")
                bu.className="bwt"
                bu.innerHTML="Delete"
                bu.addEventListener("click", () => {
                    this.delete(id);
                    this.refresh()
                });
                cell5.appendChild(bu)
                ind+=1
                }
            })
        },
        delete: async function(id) {
            alert("You are going to delete this appointment booked by your client.")
            await updateDoc(doc(db, "Appointment", id), {
                name: "NA"
            });
        },
        refresh: function refresh(){
            let tb1 = document.getElementById("table1")
            while(tb1.rows.length>1){
                tb1.deleteRow(1)
            }
            this.getSlots()
        },
        generateSlots: async function(){
            var date1 = document.getElementById("date1").value
            alert("You are going to generate bisiting slots in " + date1)

            var start1 = "10:00"
            var end1 = "12:00"
            var start2 = "12:00"
            var end2 = "14:00"
            var start3 = "14:00"
            var end3 = "16:00"
            var start4 = "16:00"
            var end4 = "18:00"
            
            const docRef = doc(collection(db, "Appointment"));

            const slot1 = await setDoc(docRef, {
                name:"NA",
                starttime:start1,
                endtime:end1,
                date:date1,
            })
            console.log(slot1.id)
            await updateDoc(doc(db, "Appointment", slot1.id), {
                id: slot1.id
            });

            const slot2 = await setDoc(docRef, {
                name:"NA",
                starttime:start2,
                endtime:end2,
                date:date1,
            })
            console.log(slot2.id)
            await updateDoc(doc(db, "Appointment", slot2.id), {
                id: slot2.id
            });

            const slot3 = await setDoc(docRef, {
                name:"NA",
                starttime:start3,
                endtime:end3,
                date:date1,
            })
            console.log(slot3.id)
            await updateDoc(doc(db, "Appointment", slot3.id), {
                id: slot3.id
            });

            const slot4 = await setDoc(docRef, {
                name:"NA",
                starttime:start4,
                endtime:end4,
                date:date1,
            })
            console.log(slot4.id)
            await updateDoc(doc(db, "Appointment", slot4.id), {
                id: slot4.id
            });
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