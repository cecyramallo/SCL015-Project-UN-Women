//import { router } from "./lib/router.js";

export const language = () => {
    const divLanguage = document.createElement("div");
    const viewLanguage = `
        <p id="language-settings">Language settings</p>
        <p id="choose-language">Choose your preferred language.</p>
        <p id="choose-language-again">You can change it again later.</p>
        <p class="input-language"><input type="radio">Français</p>
        <p class="input-language"><input type="radio">Español</p>
        <p class="input-language"><input type="radio">English</p>
        <button id="language-button">Confirm</button>
    `;
    divLanguage.innerHTML = viewLanguage;
    const loginForm = divLanguage.querySelector('#language-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLanguage;
};