import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCsdiJkgooBpkoIwdUdU3Yz91829zxCRI",
    authDomain: "clone-8ac55.firebaseapp.com",
    projectId: "clone-8ac55",
    storageBucket: "clone-8ac55.appspot.com",
    messagingSenderId: "911335629674",
    appId: "1:911335629674:web:b3a6180b1c3586c3eb3b13",
    measurementId: "G-5LLNSSWR8T"
  });

  const db = firebase.firestore();

  export { db } 