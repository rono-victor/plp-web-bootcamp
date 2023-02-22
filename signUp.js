// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,    
  }from  "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCehyTue3tqAaRjT2IqniR4VRQ-VnCYi88",
    authDomain: "bootcamp-499fa.firebaseapp.com",
    projectId: "bootcamp-499fa",
    storageBucket: "bootcamp-499fa.appspot.com",
    messagingSenderId: "734452594331",
    appId: "1:734452594331:web:2a26bf4e27eaa827af383e",
    measurementId: "G-265T1H5095"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



//login fileds
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

//create Account
const signUpEmailIn = document.getElementById("email-signup");
const confirmSignupEmailInput = document.getElementById("confirm-email-signup");
const signUpPasswordIn = document.getElementById("password-signup");
const confirmsignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");


var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmsignupPassword;
  
  createacctbtn.addEventListener("click", function (){
    console.log("hello")
    var isVerified = true;

    signupEmail = signUpEmailIn.value;
    confirmSignupEmail = confirmSignupEmailInput.value;
    if (signupEmail != confirmSignupEmail){
        window.alert("Email input does not match");
        isVerified = false;
    }
    signupPassword = signUpPasswordIn.value;
    confirmsignupPassword = confirmsignupPasswordIn.value;
    if (signupPassword != confirmsignupPassword){
        window.alert("Password input does not match");
        isVerified = false;
    }
    if(
        signupEmail == null ||
        confirmSignupEmail == null ||
        signupPassword == null ||
        confirmsignupPassword == null
    ){
        window.alert("Please fill out all required fields");
    }
    if (isVerified){
        createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
            .then((userCredentials) => {
                window.alert("Successful, account created");
                window.location ="./createTask.html";
            })
    }
  })





submitButton.addEventListener("click", function(){
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            window.alert("Successful, welcome back");
            window.location = "./createTask.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            window.alert(errorMessage);
            //window.alert("Error occurred. Try Again");
        });
});

signupButton.addEventListener("click", function(){
    main.style.display= "none";
    createacct.style.display = "block";
})
returnBtn.addEventListener("click", function(){
        main.style.display = "block";
        createacct.style.display = "none";
});