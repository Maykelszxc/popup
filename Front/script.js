var loginModal = document.getElementsById("loginForm");
var signupModal = document.getElementsById("sigunForm");

var loginBtn = document.getElementsByTagName("button")[0];
var signupBtn = document.getElementsByTagName("button")[0];

var loginClose = document.getElementsByClassName("close")[0];
var signupClose = document.getElementsByClassName("close")[1];

function openLoginForm(){
loginModal.style.display="block";
}

function openSignupForm(){
signupModal.style.display="block";
}

function closeLoginForm(){
loginModal.style.display="none";
}

function closeSignupForm(){
signupModal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == loginModal){
    loginModal.style.display = "none";
    }
if (event.target == signupModal){
    signupModal.style.display = "none";
}
}