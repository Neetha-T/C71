import  firebase from 'firebase'
require('@firebase/firestore')
//import * as firebase from 'firebase/app'
//import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD5KJrIuwM43BRw0IZIHcv4vSxetWvzKmE",
    authDomain: "wily-7e6e2.firebaseapp.com",
    projectId: "wily-7e6e2",
    storageBucket: "wily-7e6e2.appspot.com",
    messagingSenderId: "637822570968",
    appId: "1:637822570968:web:1202eba5dc1726fff922ad"
  };
  
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);

  //export default firebase.firestore();

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase.firestore();
