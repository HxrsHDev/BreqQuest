      // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
    import { getDatabase, set, ref,update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwZ1VFdM_yleNgERChfLwVOSLpsVzT4vA",
    authDomain: "login-app-10bbc.firebaseapp.com",
    databaseURL: "https://login-app-10bbc-default-rtdb.firebaseio.com",
    projectId: "login-app-10bbc",
    storageBucket: "login-app-10bbc.appspot.com",
    messagingSenderId: "26202193781",
    appId: "1:26202193781:web:9d8711cffa07bd84efdd3c"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

  submit.addEventListener('click',(e)=>{
    alert("user created successfully");
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 

    const user = userCredential.user;
    set(ref(database,'users/' + user.id),{
        email : email
    })
    alert("user logged in");
    window.location.href = "/Html/login.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  }
  );
