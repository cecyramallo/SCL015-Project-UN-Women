export const north = () => {
    const divNorth = document.createElement("div");
    const viewNorth = `
        <div class="community-arrow">
        <a class="navbar-brand" href="#/community">
        <img src="./assets/left-arrow.png" id="icon-arrow">
        <p id="text-community">Community</p>
        </a>
        </div>
        <p>Welcome to the north zone!!</p>
        <input type="search">
        <p>North Zone</p>
        <a href="#/profile"><input type="image" id="Logo-TuOportunidad"></a>
    `;
    divNorth.innerHTML = viewNorth;
    return divNorth;
};