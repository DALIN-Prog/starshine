<template>
  <UserNavBar/>
  <div class = "block">

    <div class="vitals">
        <div class="top">

          <div class="pageName">
            <img src="@/assets/healthcare.png" id="icon">
            <h1 id="title">Resident Health Summary</h1>
          </div>

          <div id="bloodP">
            <img src="@/assets/heartpressure.png" id="icon">
            <h3>Blood Pressure</h3><br>
            <!-- {{BloodP}} -->
          </div>

          <div id="heartRate">
            <img src="@/assets/heartrate.png" id="icon">
            <h3>Heart Rate</h3><br>
            <!-- {{HeartR}} -->
          </div>
        </div>

      <div class="bottom">
        <div class="left">

          <div id="temp">
            <img src="@/assets/temperature.png" id="icon">
            <h3>Temperature</h3><br>
            <!-- {{tempData}} -->
          </div>

          <div id="respRate">
            <img src="@/assets/breath.png" id="icon">
            <h3>Respiratory Rate</h3><br>
            <!-- {{RespData}} -->
          </div>

          <br>
          <div class="links">
            <div class="histData">
              <a href="">View Historical Data</a> <!-- to link to histDataPage -->
            </div>

            <br>
            <button id="addbtn" >Add</button> <!-- only for admin -->
          </div>
        </div>

        <div class="chart">
          <h4>Dashboard</h4>
          <!-- input chart here -->
        </div>
      </div>

    </div>
  </div>
  
      
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserNavBar from '@/components/UserNavBar.vue'

export default {
  name: "HealthSum",
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
  .block{
    margin: 25px;
    align-content: center;
  }
  #icon{
    width:75px;
    height:75px;
    float:left;
  }
  .pageName{
    display: inline-block;
    text-align: center;
    float: left;
    background-color:rgb(223, 128, 180);
    color: white;
    padding: 20px;
    border-radius: 15px;
  }
  #title{
    /* float: left; */
    margin-left: 10px;
  }
  #temp, #respRate, #bloodP, #heartRate, .chart{
    display: inline-block;
    text-align: center;
    font-weight: bold;
    background-color: rgb(197, 214, 214);
    padding: 20px;
    margin: 10px 25px 10px 25px;
    box-shadow: 3px 3px rgb(159, 163, 165);
    border-radius: 15px;
  }
  .top, .left, .bottom{
    display: grid;
    grid-gap: 20px;
  }
  .top{
    grid-template-columns: 1fr 1fr 1fr;
  }
  .bottom{
    grid-template-columns: 1fr 2fr;
  }
  /* .chart{
    padding: 200px 20px;
    margin: 10px 25px;
    background-color: rgb(178, 226, 216);
    border-radius:10px;
  } */
  .links{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .histData{
    margin: 2% 10%;
    font-size: 25px;
  }
  button{
    padding: 1px 20px;
    background-color: rgb(19, 130, 233);
    color: white;
    border-radius: 10px;
    font-size: 150%;
  }


</style>