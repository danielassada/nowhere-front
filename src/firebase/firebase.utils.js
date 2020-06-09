import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4PlIRoa9HukjnisjQmC_JB2FNyRCYgRw",
    authDomain: "nowhere-db.firebaseapp.com",
    databaseURL: "https://nowhere-db.firebaseio.com",
    projectId: "nowhere-db",
    storageBucket: "nowhere-db.appspot.com",
    messagingSenderId: "260523985791",
    appId: "1:260523985791:web:20f5837534ba9e6f25e84a",
    measurementId: "G-YT8M0HCDTV"
  };
 // Initialize Firebase
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});

 export const googleSignInFirebase = () => auth.signInWithPopup(provider);
 export default firebase;
