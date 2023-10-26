const express = require("express");
require('dotenv').config()
const cors = require("cors");
const test_route = require("./route/test");
const config = require("./config/config");

const app = express();
app.use(express.json())
app.use(cors());
app.use(test_route)

app.listen(config.PORT, () => console.log(`The server is running at PORT ${config.PORT}`));





// const {initializeApp }= require("firebase/app");
// const { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect }= require("firebase/auth");
// const firebaseConfig = {
  //   apiKey: "AIzaSyDyEEMg-zDNZVzSWSnhrFm19zTf4pEwWUI",
  //   authDomain: "capable-code-316308.firebaseapp.com",
  //   projectId: "capable-code-316308",
  //   storageBucket: "capable-code-316308.appspot.com",
  //   messagingSenderId: "556582428228",
  //   appId: "1:556582428228:web:5f3149a4571b03c7d02611",
  //   measurementId: "G-45NLYEVL2M"
  // };
  // const apps = initializeApp(firebaseConfig);
  // const auth = getAuth(apps);
  // auth.currentUser

