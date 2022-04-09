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
    <div id="about">
        <h1>{{this.welcomeMessage}}</h1>
        
        <img src="@/assets/landing.jpg" id="pic">
        <h4 id="intro">
            Starshine Center was founded in 2022 by a group of young entrepreneurs wanting to make a difference in society.  
            Here, we provide state of the art healthcare facilities for the elderly as well as a home for them to live in.  
            The elderly will never be bored as we organise plenty of reacreational activities for them to socialise and enjoy.
        </h4>
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
    name: "LandingPage",
    components: {
        AdminNavBar,
        ClientNavBar,
        NonLoginNavBar,
    },
    methods: {

    },
    data() {
        return {
            user: false,
            admin: false,
            welcomeMessage: "About Us"
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
                        this.welcomeMessage = "Welcome " + data.name 
                        this.admin = data.isAdmin
                        //console.log(this.user);
                    }
                }) 
            } else { // if not logged in, default message will be 'About us'
                this.welcomeMessage = "About us"
            }
        })
    },
    
}
</script>

<style scoped>
    body {
        background-color: #EFF6F8;
    }

    #pic {
        height: 500px;
        width: 1100px;
        margin-bottom: 50px;
    }

    #intro {
        width: 1100px;
        background-color: #FFFFFF;
        border-width: 2px;
        border-style: solid;
        margin: auto;
    }

    #about { 
        text-align: center;
        margin: auto;
    }
</style>