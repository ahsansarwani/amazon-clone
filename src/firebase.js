import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYhfuqPKLjmFtkEUZk_c9l2zf_w54j5SQ",
  authDomain: "clone-7816a.firebaseapp.com",
  projectId: "clone-7816a",
  storageBucket: "clone-7816a.appspot.com",
  messagingSenderId: "906899164518",
  appId: "1:906899164518:web:a220e30e2dac7e0de74ca7",
  measurementId: "G-92P92P1YBL",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
