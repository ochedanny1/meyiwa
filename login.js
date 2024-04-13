
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


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




//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Logging in...")
      window.location.href = "surprise.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

})




