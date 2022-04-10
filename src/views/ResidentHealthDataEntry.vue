<template>
    <AdminNavBar />
    <div class="container">
        <div class="row">
            <h2 class="title mt-5 mb-4">Add Vital Point For Resident</h2>
        </div>
    </div>

  <div class="container" v-if="admin">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><br></div>
          <div class="card-body">
            <form ref="form_1" action="#" @submit.prevent="submit">

              <div class="form-group row mt-4 mb-4">
                <label for="temp" class="col-md-4 col-form-label text-md-right">Temperature</label>

                <div class="col-md-6">
                  <input id="temp" type="text" class="form-control" name="temp" v-model="form.temp" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="hr" class="col-md-4 col-form-label text-md-right">Heart Rate</label>

                <div class="col-md-6">
                  <input id="hr" type="number" class="form-control" name="hr" v-model="form.hr" pattern="^\d*(\.\d{0,2})?$" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="bp" class="col-md-4 col-form-label text-md-right" >Blood Pressure</label >

                <div class="col-md-6">
                  <input id="bp" type="number" class="form-control" name="bp" v-model="form.bp" pattern="^\d*(\.\d{0,2})?$" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="rr" class="col-md-4 col-form-label text-md-right" >Respiratory Rate</label>

                <div class="col-md-6">
                  <input id="rr" type="number" class="form-control" name="password" v-model="form.rr" pattern="^\d*(\.\d{0,2})?$" required/>
                </div>
              </div>

              <!-- <div class="form-group row mt-4 mb-4">
                <label for="contact" class="col-md-4 col-form-label text-md-right" >Image</label >

                <div class="col-md-6">
                  <input id="contact" type="text" class="form-control" name="contact" v-model="form.contact" required/>
                </div>
              </div> -->

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Add
                  </button>
                  <router-link class="btn btn-secondary ms-2" :to="this.back">
                    Back
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from '../firebase.js';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
    name: 'ResidentHealthDataEntry',
    data () {
      return {
        id: this.$route.params.id,
        back: "/HistoricalData/",
        user:false,
        admin: true,
        form: {
            temp: "",
            hr: "",
            bp: "",
            rr: "",
            //img: "",
        },
      }
    },
    components: {
        AdminNavBar
    },
    mounted() {
        this.back += this.id;
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
            // var img = document.getElementById("image").value;
            const docRef = doc(collection(db, "VitalPoint"));
            await setDoc(docRef, {
                residentID: this.id,
                temperature: this.form.temp,
                heartRate: this.form.hr,
                respiratoryRate: this.form.rr,
                bloodPressure: this.form.bp,
                //image: img,
                created: serverTimestamp(),
                lastUpdated: serverTimestamp()
            }).then(() => {
                this.$refs.form_1.reset()
                this.$router.push(this.back)
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

.title {
    text-align: center;
    font-family: Merriweather;
}

</style>