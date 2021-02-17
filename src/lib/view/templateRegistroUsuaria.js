export const signUp = () => {
    const divSignUp = document.createElement("div");
    const viewSignUp = `
        <div class="logos"> 
        <img  id="oportunidad-logo" src="./assets/logo.png"> 
        <img  id="onu-logo"  src="./assets/un.women.png">
        </div>
        <p id="Registry">Sign up</p>
        <div class="input-placeholder">
        <input type="text" placeholder="First name" id="text-name" class="name-surname">
        <input type="text" placeholder="Last name" id="text-surname" class="name-surname">
        </div>
        <select name="Regions" id="region">Regiones
        <option value="0" selected disabled>Zone</option>
        <option value="Norte">North Zone</option></div>
        <option value="Centro">Central Zone</option></div>
        <option value="Sur">South Zone</option></div>
        </select></div>
        <select id="city">
        <option value="0" selected disabled id="color-city">City</option>
        <option value="Ant">Antofagasta</option></div>
        <option value="Met">Santiago</option></div>
        <option value="Ara">Temuco</option></div>
        </select></div>
        <div class="input-placeholder"><input type="email" placeholder="Email" id="text-mail"></div>
        <div class="input-placeholder"><input type="password" placeholder="Password" id="text-password"></div>
        <div class="input-placeholder"><input type="password" placeholder="Confirm password" id="text-repeat-password"></div>
        <p id="conditions">By clicking "Sign up" you agree to our Conditions, Data Policy and Cookies Policy</p>
        <button id="signup-button">Sign up</button>
    `;
    divSignUp.innerHTML = viewSignUp;
    const loginForm = divSignUp.querySelector('#signup-button');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/login';
    })
    const register = divSignUp.querySelector('#signup-button');
    register.addEventListener('click', createAccount)
    return divSignUp;
};

export const createAccount = () => {
  let email = document.querySelector('#text-mail').value;
  let password = document.querySelector('#text-password').value;  
  let region = document.querySelector('#region').value;
  console.log(region)
  let city = document.querySelector('#city').value;
  console.log(city)
  console.log(event)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
          // const signUp = firebase.auth().currentUser;
          // signUp.updateProfile({
          //     displayName: firstName, lastName
          // })
          // signUp.sendVerificationEmail();
          // alert("Revisa el email de verificación que te enviamos");
          // window.location.href = "";
      })
}

//     .then(result => {
//         result.user.updateProfile({
//             displayName : names
//         })

//         const configuration = {
//             url : 'http://localhost:5000/'
//         }

//         result.user.sendVerificationEmail(configuration)
//         .catch(error => {
//             console.error(error)
//             Materialize.toast(error.message, 4000)            
//     })

//     firebase.auth().signOut()

//     Materialize.toast("Welcome ${names}, you must verify your account")

//     $('.modal').modal('close')

//     .catch(error => {
//         console.error(error)
//         Materialize.toast(error.message, 4000)
//     })

// }