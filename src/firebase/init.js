import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase 
var firebaseConfig = {
  apiKey: "AIzaSyC2bkdXFZZ4OK1Ea-yAF5s-j1E00hlF-QM",
  authDomain: "ninja-smoothies-215ff.firebaseapp.com",
  projectId: "ninja-smoothies-215ff",
  storageBucket: "ninja-smoothies-215ff.appspot.com",
  messagingSenderId: "906281273516",
  appId: "1:906281273516:web:5994d6ff9a079ef456b709",
  measurementId: "G-NVQ4W756SB"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

// export firestore database
export default firebaseApp.firestore()