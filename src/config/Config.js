import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDrtAW9PoztwkAaPi3DYcu6RKv-k_ZEMFM",
  authDomain: "gongonimarket-1084a.firebaseapp.com",
  projectId: "gongonimarket-1084a",
  storageBucket: "gongonimarket-1084a.appspot.com",
  messagingSenderId: "160837429918",
  appId: "1:160837429918:web:0745435004205c3a3ba98f"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


   const auth = firebase.auth();
   const db = firebase.firestore();
   const storage = firebase.storage();
   

  export {auth,db,storage}