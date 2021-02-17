//import { router } from "./lib/router.js";

export const passwordReset = () => {
    const divPasswordReset = document.createElement("div");
    const viewPasswordReset = `
        <div class="logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/un.women.png">
        </div>
        <p id="reset-password">Reset your password</p>
        <p id="text-reset">We will send you a message to
        </br>
        reset your password</p>
        <p id="choose">Choose one:</p>
        <div class="placeholder-reset"><input type="tel" id="sms-reset" placeholder="SMS"></div>
        <div class="placeholder-reset"><input type="email" id="mail-reset" placeholder="Email"></div>
        <div><button id="password-button">Confirm</button></div>
    `;
    divPasswordReset.innerHTML = viewPasswordReset;
    const loginForm = divPasswordReset.querySelector('#password-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divPasswordReset;
};