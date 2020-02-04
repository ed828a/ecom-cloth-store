import firebase from 'firebase/app';
import 'firebase/firestore';  
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDU1xBiX07iW74fk-Hle9TM7oF2GwXO-E",
    authDomain: "webdev-c9039.firebaseapp.com",
    databaseURL: "https://webdev-c9039.firebaseio.com",
    projectId: "webdev-c9039",
    storageBucket: "webdev-c9039.appspot.com",
    messagingSenderId: "1055330796052",
    appId: "1:1055330796052:web:9ec8b4ca42650286589d01",
    measurementId: "G-7SNP0LP9KW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // google Authentication 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
