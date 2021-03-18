import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAcVBI4Ck6QSNBCf_fp6WE1EflQf92I0jM",
  authDomain: "real-time-blog-24e5b.firebaseapp.com",
  projectId: "real-time-blog-24e5b",
  storageBucket: "real-time-blog-24e5b.appspot.com",
  messagingSenderId: "445092088833",
  appId: "1:445092088833:web:64f29feba8ece5c6160400",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();
export default firebase;
