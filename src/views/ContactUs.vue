<template>
    <div v-if="admin && user">
        <AdminNavBar/>
    </div>
    <div v-if="!admin && user">
        <ClientNavBar/>
    </div>
    <div v-if="!user">
        <NonLoginNavBar/>
    </div>
  <div id="InsidePicture">
  <h1 id="header" class="mt-4">Contact Us</h1>
  <h2 id="name" class="mb-4">Starshine Nursing Home</h2>
  <div id="space"></div>
  </div>
  <div id="left">
      <div class="text">
      <p><b>Address:</b></p>
      <p>20 Lower Kent Ridge Rd Singapore 119080</p>
      <p><b>Phone Number: </b> +65 6601 5035</p>
      <p><b>Email: </b> enquiry@starshine.org.sg</p>
      <p><b>Operating Hours: </b></p>
      <p><b>Mon - Fri:</b> 8am - 5pm</p>
      <p><b>Sat, Sun & PH:</b> 8am - 12pm</p>
      <p><b>Visiting Hours:</b> 10am - 8pm</p>
      </div>
  </div>
  <div id="right">
      <div id="top">
          <div class="text">
          <p><b>Getting Here:</b></p>
          <p><b>By Train:</b> Kent Ridge MRT (Nearest Station)</p>
          <p><b>By Bus:</b> 100, 123</p>
          </div>
      </div>
      <div id="bottom">
          <p id="notice"><b>Notice for Visitors:</b></p>
          <div>
          <div class="text">
              <p>Last walk-in appointment available 30min before closing (*subject to availability).</p>
              <p>Kindly adhere to the booked appointment slot. For more enquiries, please approach our friendly staff.</p>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import AdminNavBar from "../components/AdminNavBar.vue"
import ClientNavBar from "../components/ClientNavBar.vue"
import NonLoginNavBar from "../components/NonLoginNavBar.vue"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../firebase.js"
import { getFirestore, collection, getDocs } from "firebase/firestore"
const db = getFirestore(firebaseApp)
export default {
    name: "ContactUs",
    components: {
        AdminNavBar,
        ClientNavBar,
        NonLoginNavBar,
    },
    data() {
        return {
            user: false,
            admin: false,
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async user => {
            if (user) { // if logged in
                this.user = auth.currentUser // set user to current user)
                let documents = await getDocs(collection(db, "User"))
                documents.forEach((docs) => {
                    let data = docs.data()
                    //console.log(docs.id)
                    if (docs.id === this.user.uid) {
                        console.log(data)
                        this.admin = data.isAdmin
                        //console.log(this.user);
                    }
                }) 
            } 
        })
    }

}
</script>

<style>
#header{
    text-align: center;
    margin-right: 5%;
    font-size: 40px;
}
#name{
    text-align: center;
    margin-right: 5%;
}
#left, #right{
    width: 40%;
    float: left;
    margin-left: 7%;
}
#left {
    background-color: rgb(252, 235, 215);
}
#right #top {
    background-color: rgb(218, 252, 252);
    margin-bottom: 20px;
}
#right #bottom{
    background-color: rgb(230, 228, 228);
    margin-top: 30px;
    margin-bottom: 60px;
}
.text, #notice{
    margin-left: 20px;
}
#notice{
    margin-top: 30px;
}
#InsidePicture{
    background-image: url(https://cdn1.vectorstock.com/i/1000x1000/74/95/group-of-old-people-cartoon-characters-happy-vector-17627495.jpg);
    background-size: 100% 750px;
}
#space {
    height: 210px;
}

</style>