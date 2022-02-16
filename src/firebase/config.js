import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEQ_QyHxmWro0yBdcC8wZso9zPlnWOC9c",
    authDomain: "fir-olx-332dc.firebaseapp.com",
    projectId: "fir-olx-332dc",
    storageBucket: "fir-olx-332dc.appspot.com",
    messagingSenderId: "474838193194",
    appId: "1:474838193194:web:8534490d2696b5f8ce1f53",
    measurementId: "G-6DT98YTX3E"
  };

  export default firebase.initializeApp(firebaseConfig)