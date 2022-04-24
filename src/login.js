const loginInput = document.querySelector("#name-input");
const logout = document.querySelector("#logout");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const loginDiv = document.querySelector(".login");
const mainDiv = document.querySelector(".main");
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("dp-none");
  mainDiv.classList.add("dp-none");
  loginForm.addEventListener("submit", handleLogin);
} else {
  printGreeting(savedUsername);
}

function handleLogin(e) {
  e.preventDefault();
  const username = loginInput.value;
  if (username === "") {
    alert("Please Write You Name!");
  } else if (username.length > 20) {
    alert("Your Name is Too Long!");
  } else {
    localStorage.setItem(USERNAME_KEY, username);
    printGreeting(username);
  }
}

function printGreeting(username) {
  const now = new Date();
  const hours = now.getHours();

  if (hours > 20) {
    greeting.innerText = `Good Night ${username}`;
  } else if (hours > 16) {
    greeting.innerText = `Good Evening ${username}`;
  } else if (hours > 11) {
    greeting.innerText = `Good Afternoon ${username}`;
  } else if (hours > 5) {
    greeting.innerText = `Good Morning ${username}`;
  } else {
    greeting.innerText = `Hello ${username}`;
  }
  loginDiv.classList.add("dp-none");
  mainDiv.classList.remove("dp-none");
}

function handleLogout(e) {
  localStorage.clear();
}

logout.addEventListener("submit", handleLogout);
