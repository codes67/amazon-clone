import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmkNiEpXuBarQoYFo0zxbXq7XPMSjbQ5c",
  authDomain: "clone-64c93.firebaseapp.com",
  databaseURL: "https://clone-64c93.firebaseio.com",
  projectId: "clone-64c93",
  storageBucket: "clone-64c93.appspot.com",
  messagingSenderId: "23862128792",
  appId: "1:23862128792:web:1803cd6410c95890e4a0ed",
  measurementId: "G-YDP4J70WLS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
