export const editProfile = () => {
    const divEditProfile = document.createElement("div");
    const viewEditProfile = `
    
        <div class="arrow-img-profile"> 
        <img src="./assets/left-arrow.png" id="arrow-profile">
        <p id="edit-profile"> Edit your profile</p>
        </div>
        <img src="./assets/profile-img1.png" id="img-profile">
        <input class="ph-edit-profile" type="text" placeholder="First name">
        <input class="ph-edit-profile" type="text" placeholder="Last name">
        <input class="ph-edit-profile" type="text" placeholder="What do I do?">
        <select class="select-edit-profile"  name="Regions">Zones
        <option class="select-edit-profile" value="0" selected disabled>Zones</option>
        <optgroup label="North Zone"></optgroup>
        <option value="Ant">Antofagasta</option>
        <optgroup label="Central Zone"></optgroup>
        <option value="Met">Metropolitana</option>
        <optgroup label="South Zone"></optgroup>
        <option value="Ara">Araucanía</option>
        </select>
        <input class="ph-edit-profile" type="text" placeholder="City">
        <button id="save-changes">Save changes</button>
    `;
    divEditProfile.innerHTML = viewEditProfile;
    const loginForm = divEditProfile.querySelector('#save-changes');
    loginForm.addEventListener('click', () => {
      window.location.href = '#/channels';
    })
    return divEditProfile;
};