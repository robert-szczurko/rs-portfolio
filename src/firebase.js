import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMRB9n1JF-d1PPA6kzO7JZtCAPkt4Jpbs",
  authDomain: "rs-portfolio-4d2ed.firebaseapp.com",
  projectId: "rs-portfolio-4d2ed",
  storageBucket: "rs-portfolio-4d2ed.appspot.com",
  messagingSenderId: "532360015524",
  appId: "1:532360015524:web:697207115035512a804031",
});

const db = firebaseApp.firestore();
export { db };
