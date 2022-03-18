<template>
  <!-- to include navbar -->

  <h1 id="titleOfPage">Resident Health Summary</h1>
  <div>
    <div class="bloodP">
      Blood Pressure<br>
      <!-- {{BloodP}} -->
    </div>

    <div class="heartRate">
      Heart Rate<br>
      <!-- {{HeartR}} -->
    </div>

    <div class="temp">
      Temperature<br>
      <!-- {{tempData}} -->
    </div>

    <div class="respRate">
      Respiratory Rate<br>
      <!-- {{RespData}} -->
    </div>

    

  </div>
  
  

      
</template>

<script>
export default {
  name: "HealthSum",
  


}
</script>

<style>
  #titleOfPage{
    text-align: left;
    border: 1px solid #dddddd;
    padding: 15px;
    border-radius: 3px;
  }
  .temp, .respRate, .bloodP, .heartRate{
    display: block;
    text-align: center;
    border: 1px grey;
    box-shadow: 2px 2px lightblue;
  }



</style>