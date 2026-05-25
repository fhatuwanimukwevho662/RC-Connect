const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

window.location.href = "dashboard.html";

});

}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.addEventListener("click", () => {

if(button.innerText !== "Login"){

alert("Action completed successfully!");

}

});

});