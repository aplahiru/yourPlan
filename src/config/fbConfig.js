import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxHq6o3xvU2N5tSr8TtvSZjX3nlSrvkdU",
  authDomain: "lapaty-yourplan.firebaseapp.com",
  databaseURL: "https://lapaty-yourplan.firebaseio.com",
  projectId: "lapaty-yourplan",
  storageBucket: "lapaty-yourplan.appspot.com",
  messagingSenderId: "421189103109",
  appId: "1:421189103109:web:2006568c1b2df8f7c7f66c",
  measurementId: "G-PEVDSC8HN5",
};

firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
