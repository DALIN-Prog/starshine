<template>
    <UserNavBar/>
    <h1>Login Page</h1>
    <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from "../uifire.js";
import "firebase/compat/auth";
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css";
import UserNavBar from "../components/UserNavBar.vue"

export default {
    name: "Login",
    components: {
        UserNavBar
    },
    mounted() {
        //calling the ui instance
        var ui = firebaseui.auth.AuthUI.getInstance();
        if(!ui) {
            //We only need to create the instance only one time
            //Initialize the FirebaseUI widget using Firebase
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }

        var uiconfig = {
            signInSuccessURL: "/",
            signInOptions:[
            firebase.auth.EmailAuthProvider.PROVIDER_ID
            ] 
        }
        ui.start("#firebaseui-auth-container", uiconfig);
    }

}
</script>

<style scoped>
   h1 {
        margin-top: 56px;
    }
</style>