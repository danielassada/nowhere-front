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

export const createUserProfileDocument = async (userAuth, additioalData) =>{
  console.log(userAuth.uid);
  
  if (!userAuth) return;
  console.log(firestore.doc(`users/${userAuth.uid}`));
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exist){
    console.log('user dont exist');
    
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      console.log('try to create user');
      
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additioalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

 // Initialize Firebase
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});

 export const googleSignInFirebase = () => auth.signInWithPopup(provider);
 export default firebase;
