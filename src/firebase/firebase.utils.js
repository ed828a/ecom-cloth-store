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
  // console.log('userAuth: ', userAuth);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log('addtionalData: ', addtionalData);

  // const collectionRef = firestore.collection('users');
  // console.log('collectionRef: ', collectionRef);

  try {
    const snapShot = await userRef.get();
    // console.log('firestore return: ', snapShot);

    // const collectionSnapshot = await collectionRef.get();
    // console.log('querySnapshot: ', collectionSnapshot);
    // console.log('collection: ', {collection: collectionSnapshot.docs.map(doc => doc.data())});

    if (!snapShot.exists) { // this is the standard to create a node in firestore.
      // if userAuth from firebase.auth().createUserWithEmailAndPassword(), displayName is null. if addtionalData has displayName, it will override the field. if from GoogleAccount, it has value.
      const { displayName, email } = userAuth; 
      console.log('displayName from userAuth: ', displayName);
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
    alert(error.message);
  }

  return userRef; // in case we still use the userRef to do other things.
}

// use this function to initialize firestore(database) with local data
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log('collectionRef: ', collectionRef);

  const querySnapshot = await collectionRef.get();
  // console.log('snapshot Size: ', querySnapshot.size);

  const batch = firestore.batch();

  if (!querySnapshot.size) { // because it's once only operation, store data only when no records on the server
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      // Get a DocumentReference for the document within the collection at the specified path. 
      // If no path is specified, an automatically-generated unique ID will be used for the returned DocumentReference.
      batch.set(newDocRef, obj);
    });

  }

  return await batch.commit(); // return a promise
}

// input is a querySnapshot of firestore collection
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // console.log('transformedCollection: ', transformedCollection);

  // convert array to object.
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();   // firestore is db in the document reference

// google Authentication 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// use google pop-up for sign-in
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// we are mimicking functionality that you may encounter when you don't have Firebase as the backend.
export const getCurrentUser = () => {
  // because we want to return a promise oriented solution that our sagas can yield for. Because sagas is just like async-await work-off of promises.
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe(); // once we get userAuth, we immediately unsubscribe onAuthStateChanged. 
      resolve(userAuth);
    }, reject); // if failed, reject will handle the failure.
  });
}

export default firebase;
