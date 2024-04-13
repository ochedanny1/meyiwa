// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9ym12zHG9RqVC0V11VYqK4i6SEn7ZBE",
  authDomain: "meyiwa-baefd.firebaseapp.com",
  projectId: "meyiwa-baefd",
  storageBucket: "meyiwa-baefd.appspot.com",
  messagingSenderId: "159865961136",
  appId: "1:159865961136:web:8ace8fefeac47e65469975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//signout button

const signout = document.getElementById('signout');
signout.addEventListener("click", function (event) {
  event.preventDefault()

  signOut(auth).then(() => {
    // Sign-out successful.
    
    alert("Signing out...")
    window.location.href = "index.htm"
    // ...
  }).catch((error) => {
    // An error happened.
  });

})