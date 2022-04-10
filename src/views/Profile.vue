<template>
  <ClientNavBar/>

  <div class="container">
    <div class="row">
        <h2 id="title" style="text-align:center">Patient Profile Page</h2>
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
                <label for="uname" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input id="uname" type="text" class="form-control" name="uname" v-model="form.name" disabled/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input id="email" type="text" class="form-control" name="hr" v-model="form.email" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="phone" class="col-md-4 col-form-label text-md-right" >Phone</label >

                <div class="col-md-6">
                  <input id="phone" type="text" class="form-control" name="phone" v-model="form.phone" required/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="condition" class="col-md-4 col-form-label text-md-right" >Condition</label>

                <div class="col-md-6">
                  <input id="condition" type="text" class="form-control" name="condition" v-model="form.condition" disabled/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="bed" class="col-md-4 col-form-label text-md-right" >Bed No.</label>

                <div class="col-md-6">
                  <input id="disabledTextInput" type="text" class="form-control" name="bed" v-model="form.bed" disabled/>
                </div>
              </div>

              <div class="form-group row mt-4 mb-4">
                <label for="join" class="col-md-4 col-form-label text-md-right" >Joined</label>

                <div class="col-md-6">
                  <input id="disabledTextInput" type="text" class="form-control" name="condition" v-model="form.join" disabled/>
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Update
                  </button>
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
import ClientNavBar from "@/components/ClientNavBar.vue";
import firebaseApp from '@/firebase.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, updateDoc, doc, getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default {
  name: "ProfilePage",
  components: {
    ClientNavBar
  },
  data() {
    return {
      user: false,
      form: {
        name: "",
        email: "",
        phone: "",
        condition: "",
        bed:"",
        join:"",
      },
    };
  },
  mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, async user => {
        if (user) { // if logged in
        this.user = auth.currentUser // set user to current user)
        let documents = await getDocs(collection(db, "User"))
        documents.forEach((docs) => {
          let data = docs.data()
          if (docs.id === this.user.uid) {
            //console.log(data)
            this.form.name = data.name
            this.form.email = data.email
            this.form.phone = data.phone
            this.form.condition = data.condition
            this.form.bed = data.bedNumber
            this.form.join = data.createdAt.toDate().toDateString().slice(4)
          } 
        })
      }
    })
  },
  methods: {
    update: async function() {
        const userToUpdate = doc(db, "User", this.user.uid);
        await updateDoc(userToUpdate, {
            phone: this.form.phone,
            email: this.form.email,
        }).then(() => {
            location.reload();
        });
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Sacramento&display=swap');
#title {
    font-family: Merriweather;
    margin: 16px 0 16px 0;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}
</style>