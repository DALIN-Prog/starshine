<template>
  <AdminNavBar/>
  <div class="container">
        <div class="row">
            <h2 class="title mt-5 mb-4">Edit Vital Point For Resident</h2>
        </div>
    </div>

  <div class="container" v-if="user">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><br></div>
          <div class="card-body">
            <form ref="form_1" action="#" @submit.prevent="update">

              <div class="form-group row mt-4 mb-4">
                <label for="temp" class="col-md-4 col-form-label text-md-right">Temperature</label>

                <div class="col-md-6">
                  <input id="temp" type="text" class="form-control" name="temp" v-model="form.temp" pattern="^\d*(\.\d{0,2})?$" required/>
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
                    Update
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
import AdminNavBar from '@/components/AdminNavBar.vue'
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, getFirestore, serverTimestamp, getDocs, collection } from "firebase/firestore";
const db = getFirestore(firebaseApp);
export default {
    name: "EditData",
    components: {
        AdminNavBar,
    },
    data() {
        return {
            id: this.$route.params.id,
            back:"",
            user: false,
            form: {
                temp: "",
                hr: "",
                bp: "",
                rr: "",
                //img: "",
            },
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
            if (user) { // if logged in
                this.user = auth.currentUser // set user to current user)
            }
            let vitalPoint = await getDocs(collection(db, "VitalPoint"))
            vitalPoint.forEach((docs) => {
                if (this.id === docs.id) {
                    this.back = "/HistoricalData/" + docs.data().residentID;
                    this.form.hr = docs.data().heartRate
                    this.form.temp = docs.data().temperature
                    this.form.rr = docs.data().respiratoryRate
                    this.form.bp = docs.data().bloodPressure
                }
            })
        })
    },
    methods: {
        update: async function() {
            const vpToEdit = doc(db, "VitalPoint", this.id);
            await updateDoc(vpToEdit, {
                temperature: this.form.temp,
                heartRate: this.form.hr,
                respiratoryRate: this.form.rr,
                bloodPressure: this.form.bp,
                lastUpdated: serverTimestamp()
            }).then(() => {
                this.$router.push(this.back)
            });
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