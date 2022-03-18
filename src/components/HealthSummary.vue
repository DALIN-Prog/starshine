<template>
  <!-- to include navbar -->

  <h1 id="titleOfPage">Resident Health Summary</h1>
  <div>
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

}
</script>

<style>
  #titleOfPage{
    text-align: left;
  }
  .temp, .respRate{
    border-block: left;
    border: 1px grey;
  }



</style>