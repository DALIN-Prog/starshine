<template>
  <UserNavBar />
  <br />
  <div>
    <p class="title"><b>Patient Profile Page</b></p>
  </div>
  <br />
  <div class="infodiv">
    <span class="itemTitle">Name:</span>
    <div class="textbox"></div>
  </div>
  <br />
  <div class="infodiv">
    <span class="itemTitle">Email:</span>
    <div class="textbox"></div>
  </div>
  <br />
  <div class="infodiv">
    <span class="itemTitle">Contact:</span>
    <div class="textbox"></div>
  </div>
  <br />
  <div class="infodiv">
    <span class="itemTitle">Bed Number:</span>
    <div class="textbox"></div>
  </div>
  <button class="btn btn-primary btn-position" type="submit">
    Change Information
  </button>
  <!--ImageUploader /-->
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue";
//import ImageUploader from "@/components/ImageUploader.vue";

export default {
  name: "ProfilePage",
  components: {
    UserNavBar,
    //ImageUploader,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
. {
  background-color: beige;
}
.title {
  text-align: center;
  font-size: 40px;
}
.infodiv {
  left: 200px;
  position: relative;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
  margin: 10 px;
  width: 600px;
}
.itemTitle {
  color: rgba(0, 0, 0, 1);
  padding-right: 10px;
  width: 300px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: right;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
  font-size: 23px;
  float: left;
}
.textbox {
  padding: 0;
  height: 35px;
  width: 600px;
  position: relative;
  left: 0;
  outline: none;
  border: 2px solid #000000;
  border-color: rgba(0, 0, 0, 0.15);
  background-color: rgb(225, 243, 247);
  font-size: 23px;
  float: left;
}
.btn-position {
  left: 400px;
  position: relative;
}
</style>