export const  = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <div id="welcome">
        <p class="welcome" >Welcome</p>
        <img src="./assets/logo.png" class="logo-bienvenida">
        <button id="enter-button">Start</button> </div>
    `;
    divWelcome.innerHTML = viewWelcome;
    const loginForm = divWelcome.querySelector('#enter-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    return divWelcome;
};