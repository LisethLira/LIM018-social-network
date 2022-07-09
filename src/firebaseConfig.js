    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
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
    const auth = getAuth(app);

export const createUser = (email,password) => { 
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(email);
            // Signed in
      //     const user = userCredential.user;
      //   // ...
      //   })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // ..
      });
}

export const loginUser = ()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


