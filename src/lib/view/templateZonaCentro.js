export const center = () => {
    const divCenter = document.createElement("div");
    const viewCenter = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Community</p>
        </a>
        </div>
        <p>Welcome to the central zone!</p>
        <input type="search">
        <p>Zona Central</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divCenter.innerHTML = viewCenter;
    return divCenter;
};