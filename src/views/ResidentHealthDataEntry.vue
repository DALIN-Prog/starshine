<template>
    <UserNavBar />
    <h2 class="header mt-4 mb-4">Add Vital Point For Resident</h2>
    <div class="container justify-content-center" v-if="admin">
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="residentID" class="form-label">Resident ID</label>
                <input type="text" class="form-control" id="residentID" placeholder="name@example.com" required>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="temperature" class="form-label">Temperature</label>
                <input type="number" class="form-control" id="temperature" placeholder="Enter value" required>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="heartRate" class="form-label">Heart Rate</label>
                <input type="number" class="form-control" id="heartRate" placeholder="Enter value" required>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="bloodPressure" class="form-label">Blood Pressure</label>
                <input type="number" class="form-control" id="bloodPressure" placeholder="Enter value" required>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="respiratoryRate" class="form-label">Respiratory Rate</label>
                <input type="number" class="form-control" id="respiratoryRate" placeholder="Enter value" required>
            </div>
        </div>
        <div class="row">
            <div class="col-4"></div>
            <div class="mb-3 col-4">
                <label for="formFile" class="form-label">Elderly Image</label>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>
        
        <button type="button" class="btn btn-primary submit" @click="submit">Submit</button>
        <button type="button" class="btn btn-secondary cancel">Cancel</button>
        
    </div>
    
</template>

<script>
import UserNavBar from "../components/UserNavBar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from '../firebase.js';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    name: 'ResidentHealthDataEntry',
    data () {
      return {
          user:false,
          admin: true,
      }
    },
    components: {
        UserNavBar
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
            //console.log("line 35", user)
            if (user) { // if logged in
                this.user = auth.currentUser // set user to current user)
                let documents = await getDocs(collection(db, "User"))
                documents.forEach((docs) => {
                    let data = docs.data()
                    if (docs.id === this.user.uid) {
                      //console.log(data)
                      this.admin = data.isAdmin
                      //console.log(this.user);
                  }
              })
            } 
        })
    },
    methods: {
        async submit() {

            var residentID = document.getElementById("residentID").value;
            var a = document.getElementById("temperature").value;
            var b = document.getElementById("heartRate").value;
            var c = document.getElementById("bloodPressure").value;
            var d = document.getElementById("respiratoryRate").value;
            var e = document.getElementById("condition").value;
            var f = document.getElementById("image").value;

            alert("Saving data for Resident: " + "ResidentName");

            try {
                const docRef = await setDoc(doc(db, "VitalPoint", residentID), {
                    Temperature: a,
                    heartRate: b,
                    BloodPressure: c,
                    respiratoryRate: d,
                    condition: e,
                    image: f,
                    created: serverTimestamp(),
                    lastUpdated: serverTimestamp()
                })

                console.log(docRef);
                document.getElementById("dataentryform").reset();
                this.$emit("added");
            }

            catch(error) {console.error("Error adding document: ", error);}
        }
    }
}
</script>

<style scoped>
.header {
    text-align: center
}

.submit {
    margin-left: 440px;
}

.cancel {
    margin-left: 20px;
}
</style>