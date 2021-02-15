import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCr8NTT2CKj9OLUhQZou4RZ_4a0rlG7yJg",
  authDomain: "h-store-8d170.firebaseapp.com",
  projectId: "h-store-8d170",
  storageBucket: "h-store-8d170.appspot.com",
  messagingSenderId: "94492145994",
  appId: "1:94492145994:web:7d34b3b0bff274acb729b3",
  measurementId: "G-6P2R7KHCNV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
