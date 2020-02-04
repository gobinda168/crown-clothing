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

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const Snapshot = await userRef.get();
  // console.log(snapshot)
  if (!Snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
