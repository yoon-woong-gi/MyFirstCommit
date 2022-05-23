const loginForm=document.querySelector('#login-form');
const loginInput =loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME='hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit (event) {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(saveUserName)
}