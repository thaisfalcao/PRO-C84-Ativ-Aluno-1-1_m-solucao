//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABtxo5nc0HBLZI4QzdwG5YsOML2cClo94",
  authDomain: "aula-1-m-c78.firebaseapp.com",
  projectId: "aula-1-m-c78",
  storageBucket: "aula-1-m-c78.appspot.com",
  messagingSenderId: "866288989118",
  appId: "1:866288989118:web:34852791cf6eaf804dffef"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
