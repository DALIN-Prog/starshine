<template>
  <div v-if="admin">
    <AdminNavBar/>
  </div>
  <div v-else>
    <ClientNavBar/>
  </div>
  <h2 class="pageName">{{patient}}'s Health Summary</h2>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Temperature</h5>
            <p class="card-text text-center fs-3 fw-bold">{{temp}}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1">
              Learn More
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Temperature</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Body temperatures is an early warning sign of infection. <br>
                    A <strong>normal</strong> healthy temperature ranges from <strong>36.1℃</strong> to <strong>37.2℃</strong>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Blood Pressure</h5>
            <p class="card-text text-center fs-3 fw-bold">{{bp}}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              Learn More
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Blood Pressure</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Blood pressure is vital because it delivers white blood cells and antibodies for immunity and hormones such as insulin. <br>
                    Men and women who are <strong>65 or older</strong> should aim for a blood pressure <strong>lower than 130/80 mm Hg</strong>.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Heart Rate</h5>
            <p class="card-text text-center fs-3 fw-bold">{{hr}}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              Learn More
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Heart Rate</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    The heart circulates oxygen and nutrient-rich blood throughout the body. When it's not working properly, just about everything is affected. <br>
                    A <strong>normal</strong> heart rate for seniors is between <strong>60 and 100 beats per minute</strong>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Respiratory Rate</h5>
            <p class="card-text text-center fs-3 fw-bold">{{rp}}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal4">
              Learn More
            </button>
            <!-- Modal -->
            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Respiratory Rate</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Respiratory rate is a fundamental vital sign that is sensitive to different pathological conditions. <br>
                    The <strong>normal</strong> respiratory rate for elderly individuals living independently is <strong>12-18 breaths per minute</strong> while it is <strong>16-25 breaths per minute</strong> for those needing long term care.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container image">
    <div class="row">
      <div class="col border chart">
        <select class="form-select mt-4 mb-4" v-model="val">
            <option value="">Please select one </option>
            <option>Temperature</option>
            <option>Blood Pressure</option>
            <option>Heart Rate</option>
            <option>Respiratory Rate</option>
        </select>
        <div v-if= "val === 'Temperature'">
            <line-chart :data="this.charttemp" :download="true"></line-chart>
        </div>
        <div v-if= "val === 'Blood Pressure'">
            <line-chart :data="this.chartbp" :download="true"></line-chart>
        </div>
        <div v-if= "val === 'Heart Rate'">
            <line-chart :data="this.charthr" :download="true"></line-chart>
        </div>
        <div v-if= "val === 'Respiratory Rate'">
            <line-chart :data="this.chartrr" :download="true"></line-chart>
        </div>
        <router-link type="button" class="btn btn-outline-primary hist mb-2" :to="this.historical">View Historical Data</router-link>
        <router-link type= "button" class="btn btn-outline-primary add mb-2" :to="this.dataentry" v-if="admin">Add Vital Points</router-link> <!-- only for admin -->
      </div>
    </div>
  </div>
      
</template>

<script>
import AdminNavBar from '@/components/AdminNavBar.vue'
import ClientNavBar from '@/components/ClientNavBar.vue'
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseApp);


export default {
  name: "HealthSummary",
  components: {
    AdminNavBar,
    ClientNavBar
  },
  data () {
      return {
          user:false,
          admin: true,
          id: this.$route.params.id,
          historical:"/HistoricalData/",
          dataentry:"/DataEntry/",
          temp: 0,
          bp: 0,
          hr: 0,
          rp: 0,
          val:"",
          patient:"",
          arr:[],
          chartbp: {},
          charttemp: {},
          charthr: {},
          chartrr: {}
      }
  },
  mounted () {
    const auth = getAuth();
    const holder = []
    onAuthStateChanged(auth, async user => {
      if (user) {
        this.user = auth.currentUser // set user to current user)
        let documents = await getDocs(collection(db, "User"))
              
        documents.forEach((docs) => {
          let data = docs.data()
          if (docs.id === this.user.uid) {
            this.admin = data.isAdmin
          }
          if (this.id === docs.id) {
            this.patient = data.name
          }
        })
        
        if (this.admin) {
          this.dataentry += this.id
        }
        this.historical+=this.id
        let vitalPoint = await getDocs(collection(db, "VitalPoint"))
        let latest = 0
        vitalPoint.forEach((docs) => {
          if (docs.data().residentID === this.id) {
            holder.push(docs.data())
          }
          
          if (docs.data().created > latest && docs.data().residentID === this.id) {
            latest = docs.data().created
            this.temp = docs.data().temperature + " ℃"
            this.hr = docs.data().heartRate + " bpm"
            this.bp = docs.data().bloodPressure + " mm Hg"
            this.rp = docs.data().respiratoryRate + " bpm"
          }
        })
        holder.sort(this.compare)
        this.arr = holder.slice(0,7)
        this.arr.forEach((vp) => {
          const date = new Date(vp.created.seconds*1000).toLocaleString().substring(0,10)
          const day = date.slice(0,2)
          const month = date.slice(3,5)
          const year = date.slice(6,10)
          const finalDate = year +"-" + month + "-" + day
          console.log(new Date(vp.created.seconds*1000).toLocaleString().substring(0,10))
          // console.log(vp.created.toDate().toDateString().slice(4))
          this.charttemp[finalDate] = vp.temperature
          this.chartbp[finalDate] = vp.bloodPressure
          this.chartrr[finalDate] = vp.respiratoryRate
          this.charthr[finalDate] = vp.heartRate
        })
      }
    })
  },
  methods: {
    compare: function (a, b) {
        return b.created - a.created
    },
  }

}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  .add {
    margin: 12px 0 0 0;
  }

  .chart {
    width: 868px;
  }
  
  .graphSelector {
    margin: 16px 0 32px 0 ;
  }

  .hist {
    margin: 12px 12px 0 0 
  }

  .image {
    margin-top: 16px;
  }

  .pageName{  
    font-family: Merriweather;
    margin-left: 12px;
  }

</style>