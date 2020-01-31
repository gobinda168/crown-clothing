import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDai3DKBouavaKa0WxpluX1h9O-aOlGSmI",
  authDomain: "crwn-db-f4970.firebaseapp.com",
  databaseURL: "https://crwn-db-f4970.firebaseio.com",
  projectId: "crwn-db-f4970",
  storageBucket: "crwn-db-f4970.appspot.com",
  messagingSenderId: "89816548411",
  appId: "1:89816548411:web:95aac2c34045f8bbe7881e",
  measurementId: "G-JVRLQSDPPB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
