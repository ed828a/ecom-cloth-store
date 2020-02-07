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
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('uid: ', userAuth.uid);
 
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
  
  console.log("run to here");
  return userRef; // in case we still use userRef to do other things.
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google Authentication 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
