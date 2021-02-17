//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p>Language settings</p>
        <p>Choose your preferred language.</p>
        <p>You can change your language again later.</p>
        <p><input type="radio">Kreyol</p>
        <p><input type="radio">Español</p>
        <p><input type="radio">English</p>
        <button id="language-button">Confirm</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLanguage;
};