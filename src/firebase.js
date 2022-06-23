import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaD_e65R9PaV4a_mNOPe87Dz_zhNzl5xs",
  authDomain: "ecommerce-80488.firebaseapp.com",
  projectId: "ecommerce-80488",
  storageBucket: "ecommerce-80488.appspot.com",
  messagingSenderId: "106720293376",
  appId: "1:106720293376:web:e5ba47c32de2ee11af5ee5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
