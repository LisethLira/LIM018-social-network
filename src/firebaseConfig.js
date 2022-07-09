// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA33HPkczj5Pn1HEaxSuuEkz5LWHDMUTa4",
  authDomain: "purr-love.firebaseapp.com",
  projectId: "purr-love",
  storageBucket: "purr-love.appspot.com",
  messagingSenderId: "578237034767",
  appId: "1:578237034767:web:e380c2da3118685a558e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
const auth = getAuth(app);
// Initialize firestore
const db = getFirestore(app);
// Google Provider
const provider = new GoogleAuthProvider();

// FUNCIÓN REGISTER
export const createUser = (email,password) => createUserWithEmailAndPassword(auth, email, password)

// Base de datos de registro de usuarios
export const createUserRegisterDB = (uid, name, email, password) => {
  setDoc(doc(db, 'users', uid), {
    name,
    email,
    password,
  });
};

// FUNCIÓN LOGIN
export const loginUser = (email,password)=> signInWithEmailAndPassword(auth, email, password)

// FUNCIÓN LOGIN WITH GOOGLE

export const loginGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return console.log('registrado con google');
    })

    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return console.log('no registrado');
    });
};

// FUNCIÓN LOGOUT
