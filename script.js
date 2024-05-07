

const sessionTime = 1;
const sessionTimeout = sessionTime * 60000; 
const sessionMessage = document.querySelector('.sessionMessage');
const loginContainer = document.querySelector('.login-container');
const userMessage = document.querySelector('.user-message');


function startSession(username) {

  sessionStorage.setItem('username', username)
  const expirationTime = new Date().getTime() + sessionTimeout;

  sessionStorage.setItem('expirationTime', expirationTime);
}


function isSessionExpired() {
  console.log("r8")
  const currentTime = new Date().getTime();
  const expirationTime = sessionStorage.getItem('expirationTime');
  console.log(currentTime)
  console.log(expirationTime)
  if (currentTime > expirationTime) {
    // sessionMessage.classList.remove("d-none")
    userMessage.classList.add("d-none")
    loginContainer.classList.remove("d-none")
  }

}


function displaySessionStatus() {
  const currentUsername = sessionStorage.getItem('username');
  if (currentUsername) {
    console.log("This ios message ")
    userMessage.innerHTML = `Welcome, ${currentUsername}! Your session is active.`;
    userMessage.classList.remove("d-none")
    loginContainer.classList.add("d-none")
    sessionMessage.classList.add("d-none")
  } else {
    sessionMessage.classList.remove("d-none")
    userMessage.classList.add("d-none")
    loginContainer.classList.add("d-none")
  }
}

setInterval(() => {
  isSessionExpired()
}, 1000);
displaySessionStatus();

document.querySelector(".login").addEventListener('click', function(){
  const username = document.querySelector('.username').value;
  const pass = document.querySelector('.pass').value;
  startSession(username);
  displaySessionStatus();
})
document.querySelector(".log").addEventListener('click', function(){
  loginContainer.classList.remove("d-none")
  userMessage.classList.add("d-none")
  sessionMessage.classList.add("d-none")
})

