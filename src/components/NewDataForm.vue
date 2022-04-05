<template>
    <div class = "dataentryform">
        <form id = "dataentryform">
            <h2> Add Data for Resident </h2>
            <br>

            <div class = "form">
                <label for = "residentID"> Resident ID: </label>
                <input type = "text" id = "residentID" required = "" placeholder = "Pre-filled">
                <br><br>

                <label for = "temperature"> Temperature: </label>
                <input type = "number" id = "temperature" required = "" placeholder = "Enter Temperature">
                <br><br>

                <label for = "heartRate"> Heart Rate: </label>
                <input type = "number" id = "heartRate" required = "" placeholder = "Enter Heart Rate">
                <br><br>

                <label for = "bloodPressure"> Blood Pressure: </label>
                <input type = "number" id = "bloodPressure" required = "" placeholder = "Enter Blood Pressure">
                <br><br>

                <label for = "respiratoryRate"> Respiratory Rate: </label>
                <input type = "number" id = "respiratoryRate" required = "" placeholder = "Enter Respiratory Rate">
                <br><br>

                <label for = "condition"> Conditions: </label>
                <input type = "text" id = "condition" required = "" placeholder = "Enter Conditions">
                <br><br>

                <label for = "image"> Image: </label>
                <input type = "text" id = "image" required = "" placeholder = "Enter URL">
                <br><br>

                <div class = "save">
                    <button id = "saveButton" type = "button" v-on:click = "savetofs"> Save </button>
                    <br><br>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import firebaseApp from '../firebase.js';
    import { getFirestore } from "firebase/firestore";
    import { doc, setDoc, serverTimestamp } from "firebase/firestore";
    const db = getFirestore(firebaseApp);
    
    export default {
        methods: {
            async savetofs() {

                var residentID = document.getElementById("residentID").value;
                var a = document.getElementById("temperature").value;
                var b = document.getElementById("heartRate").value;
                var c = document.getElementById("bloodPressure").value;
                var d = document.getElementById("respiratoryRate").value;
                var e = document.getElementById("condition").value;
                var f = document.getElementById("image").value;
    
                alert("Saving data for Resident: " + "ResidentName");
    
                try {
                    const docRef = await setDoc(doc(db, "VitalPoint", residentID), {
                        Temperature: a,
                        heartRate: b,
                        BloodPressure: c,
                        respiratoryRate: d,
                        condition: e,
                        image: f,
                        created: serverTimestamp(),
                        lastUpdated: serverTimestamp()
                    })
    
                    console.log(docRef);
                    document.getElementById('dataentryform').reset();
                    this.$emit("added");
                }
    
                catch(error) {console.error("Error adding document: ", error);}
            }
        }
    }
</script>

<style scoped>
h2 {
    background-color: rgb(128, 203, 226);
}

.form {
    display: inline-block;
    text-align: right;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input:hover {
    box-shadow: 3px 3px rgb(146, 182, 236);
    border-radius: 2px;
}

.save {
    text-align: center;
}
</style>
