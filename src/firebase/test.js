import firebase from 'firebase/app';
import 'firebase/firestore';  

const firestore = firebase.firestore();

firestore.collection('users').doc('osjlnxl3...').collection('cartItems').doc('12345kdmlkdsa');
// equenvlent to 
firestore.doc('/users/osjlnxl3.../cartItems/12345kdmlkdsa');
// they all can get a document object of documentId is '12345kdmlkdsa'
// to get a collection object, like this:
firestore.collection('/users/osjlnxl3.../cartItems');