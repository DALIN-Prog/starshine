<template>
  
  <UserNavBar/>
  <div class = "block">
    <div class="pageName">
      <img src="@/assets/healthcare.png" id="pic" style="width:75px;height:75px;float:left">
      <h1 id="title">Resident Health<br> Summary</h1>
    </div>

    <div class="vitals">
      <div class="bloodP">
        <img src="@/assets/heartpressure.png" id="pic" style="width:75px;height:75px;float:left">
        <h3>Blood Pressure</h3><br>
        <!-- {{BloodP}} -->
      </div>

      <div class="heartRate">
        <img src="@/assets/heartrate.png" id="pic" style="width:75px;height:75px;float:left">
        <h3>Heart Rate</h3><br>
        <!-- {{HeartR}} -->
      </div>

      <div class="temp">
        <img src="@/assets/temperature.png" id="pic" style="width:75px;height:75px;float:left">
        <h3>Temperature</h3><br>
        <!-- {{tempData}} -->
      </div>

      <div class="respRate">
        <img src="@/assets/breath.png" id="pic" style="width:75px;height:75px;float:left">
        <h3>Respiratory Rate</h3><br>
        <!-- {{RespData}} -->
      </div>

      <br>
      <div class="histData">
        <a href="">View Historical Data</a>
      </div>

      <br>
      <button id="addbtn">Add</button>


    

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

<style>
  .block{
    margin: 10px;
    float: left;
  }

  .pageName{
    display: inline-block;
    float: left;
    text-align: center;
    background-color:rgb(223, 128, 180);
    color: white;
    padding: 20px;
    border-radius: 10px;
  }
  #title{
    float: left;
    margin-left: 10px;
  }
  .temp, .respRate, .bloodP, .heartRate{
    display: inline-block;
    text-align: center;
    font-weight: bold;
    background-color: rgb(212, 240, 236);
    border: 5px grey;
    padding: 90px;
    margin: 50px;
    /* margin-right: 50px; */
    box-shadow: 3px 3px lightblue;
  }
  .histData {
    margin: 10px;
  }
  #addbtn{
    float: left;
    background-color: rgb(19, 130, 233);
    color: white;
    border-radius: 10px;
    font-size: 150%;

  }


</style>