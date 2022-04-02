<template>
  <UserNavBar/>
  <h2 class="pageName">Resident Health Summary</h2>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Temperature</h5>
            <p class="card-text text-center fs-3 fw-bold">Value</p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            <p class="card-text text-center fs-3 fw-bold">Value</p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            <p class="card-text text-center fs-3 fw-bold">Value</p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
            <p class="card-text text-center fs-3 fw-bold">Value</p>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Elderly Image</h5>
          </div>
          <img src="@/assets/people.png" class="card-img-bottom" alt="...">
        </div>
      </div>
      <div class="col-sm-8 border chart">
        <div class="dropdown graphSelector">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Temperature
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Temperature</a></li>
            <li><a class="dropdown-item" href="#">Blood Pressure</a></li>
            <li><a class="dropdown-item" href="#">Heart Rate</a></li>
            <li><a class="dropdown-item" href="#">Respiratory Rate</a></li>
          </ul>
        </div>
        <line-chart :data="{'2022-05-13': 2, '2022-05-14': 5}" :download="true"></line-chart>
        <router-link type="button" class="btn btn-outline-primary btn-lg hist" to="/HistoricalData">View Historical Data</router-link>

        <router-link type= "button" class="btn btn-outline-primary btn-lg add" to="/DataEntry">Add Vital Points</router-link> <!-- only for admin -->
      </div>
    </div>
  </div>
      
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserNavBar from '@/components/UserNavBar.vue'

export default {
  name: "HealthSummary",
  components: {
    UserNavBar
  },
  data () {
      return {
          user:false,
      }
  },

  mounted () {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {
              this.user = user;
          }
      })
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