/* 
  firebase import is in order, 
  1. first is import firebase from firebase/app
  2. then you can import firestore under firebase
  3. then you can import auth under firebase
  so firebase is the base of firestore and auth.
*/
import firebase from 'firebase/app';
import 'firebase/firestore'; 
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCDU1xBiX07iW74fk-Hle9TM7oF2GwXO-E",
//   authDomain: "webdev-c9039.firebaseapp.com",
//   databaseURL: "https://webdev-c9039.firebaseio.com",
//   projectId: "webdev-c9039",
//   storageBucket: "webdev-c9039.appspot.com",
//   messagingSenderId: "1055330796052",
//   appId: "1:1055330796052:web:9ec8b4ca42650286589d01",
//   // measurementId: "G-7SNP0LP9KW"
// };

// userAuth is just the user input in auth.onAuthStateChanged
export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return; // if user not sign in, exit 
  console.log('userAuth: ', userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('addtionalData: ', addtionalData);
 
  try {
    const snapShot = await userRef.get();
    // console.log('firestore return: ', snapShot);
    if(!snapShot.exists){ // this is the standard to create a node in firestore.
      const { displayName, email} = userAuth;
      const createAt = new Date();
      await userRef.set({
        displayName,
        email,
        createAt,
        ...addtionalData
      });
    }
  } catch (error) {
    console.log('firestore error when creating user: ', error.message);
  }
  
  return userRef; // in case we still use the userRef to do other things.
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google Authentication 
const provider = new firebase.auth.GoogleAuthProvider();
// use google pop-up for sign-in
provider.setCustomParameters({ prompt: 'select_account' }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
