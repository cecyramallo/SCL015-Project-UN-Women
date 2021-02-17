export const logIn = () => {
    const divLogIn = document.createElement("div");
    const viewLogIn = `
        <div class="logos"> 
          <img  id="oportunidad-logo" src="./assets/logo.png"> 
          <img  id="onu-logo"  src="./assets/un.women.png">
        </div>
        <p id="inicio-sesion" font="Bold" >Log in to your account</p>
        <div><input type="email" placeholder="Email" id="e-mail"></div>
        <div><input type="password" placeholder="Password" id="password"></div>
        <div id="text-reset-password">
        <a class="text-reset-password" href="#/resetpassword">Forgot password?</a>
        </div>
        <button id="login-button">Log in</button>
        <p id="not-account"><strong>Don't have an account? <a href="#/signup">Sign up</strong></a></p>
    `;
    divLogIn.innerHTML = viewLogIn;
    const loginForm = divLogIn.querySelector('#login-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divLogIn;
};
