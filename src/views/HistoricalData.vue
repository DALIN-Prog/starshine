<template>
    <UserNavBar/>
    <div class="container">
        <div class="row">
            <h2 id="title" style="text-align:center">{{displayname}}'s Past Data</h2>
            <router-link class="btn btn-outline-primary btn-lg" to="/DataEntry" v-on:click="addVitals()" v-if="admin">Add Vital Points</router-link>
        </div>
    </div>

    <div class="container">
        <table class="table table-striped table-hover" id="table">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">Created At</th>
            <th scope="col">Blood Pressure</th>
            <th scope="col">Temperature</th>
            <th scope="col">Heart Rate</th>
            <th scope="col">Respiratory Rate</th>
            <th scope="col">Image</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
    </table>
    </div>
    
</template>

<script>
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore, doc, deleteDoc } from "firebase/firestore";
const db = getFirestore(firebaseApp);
import UserNavBar from '@/components/UserNavBar.vue'

export default {
    name: "HistoricalData",
    components: {
        UserNavBar
    },

    data() {
        return {
            displayname: "",
            user: false,
            admin: false,
            arr: [],
            index: 0

        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
            if (user) { // if logged in
                this.user = auth.currentUser // set user to current user)
                let documents = await getDocs(collection(db, "User"))
                documents.forEach((docs) => {
                    let data = docs.data()
                    if (docs.id === this.user.uid) {
                        //console.log(data)
                        this.displayname = data.name //this.user.displayName
                        this.admin = data.isAdmin
                        //console.log(this.user);
                    }
                })
                let vitalPoint = await getDocs(collection(db, "VitalPoint"))
                vitalPoint.forEach((docs) => {
                    // console.log(docs.data())
                    let data = docs.data()
                    if (this.user.uid === data.residentID) {
                        this.arr.push(docs)
                    }
                })
                this.arr.sort(this.compare)
                let index = 1
                this.arr.forEach((obj) => {
                    var table = document.getElementById("table")
                    var row = table.insertRow(index)
                    var indexCell = row.insertCell(0); var createCell = row.insertCell(1); var bpCell = row.insertCell(2); 
                    var tempCell = row.insertCell(3); var hrCell = row.insertCell(4); var rpCell = row.insertCell(5); 
                    var imgCell = row.insertCell(6); var lastCell = row.insertCell(7); var actionsCell = row.insertCell(8);
                    indexCell.innerHTML = index;
                    createCell.innerHTML = obj.data().created.toDate().toDateString().slice(4) + " " + obj.data().created.toDate().toLocaleTimeString('en-US');
                    tempCell.innerHTML = obj.data().temperature + " ℃";
                    bpCell.innerHTML = obj.data().bloodPressure + " mm Hg";
                    hrCell.innerHTML = obj.data().heartRate + " bpm";
                    rpCell.innerHTML = obj.data().respiratoryRate + " bpm";
                    imgCell.innerHTML = "image";
                    lastCell.innerHTML = obj.data().lastUpdated.toDate().toDateString().slice(4) + " " + obj.data().lastUpdated.toDate().toLocaleTimeString('en-US');
                    const group = "<div class='btn-group' role='group' aria-label='Basic mixed styles example'>"
                    const edit = "<button id='edit-" + obj.id + "' type='button' class='btn btn-primary btn-sm'>Edit</button>"
                    const del = "<button id='del-" + obj.id + "' type='button' class='btn btn-danger btn-sm'>Delete</button></div>"
                    actionsCell.innerHTML = group + edit + del;
                    // var btnEdit = document.getElementById("edit-" + obj.id)
                    var btnDelete = document.getElementById("del-" + obj.id)
                    
                    // btnEdit.addEventListener("click", () => {
                    //     editData(obj.id);
                    // });
                    btnDelete.addEventListener("click", () => {
                        this.deleteData(obj.id);
                    });
                    index++
                })
            }
        })
    },

    methods: {
        compare: function (a, b) {
            return b.data().created - a.data().created
        },
        deleteData: async function (docID) {
            alert("You're deleting a vital point")
            await deleteDoc(doc(db, "VitalPoint", docID))
            location.reload();
        }
        
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