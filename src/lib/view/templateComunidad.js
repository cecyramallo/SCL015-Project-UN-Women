export const community = () => {
    const divCommunity = document.createElement("div");
    const viewCommunity = `
				<div class="community-arrow">
				<a class="navbar-brand" href="#/channels">
				<img src="./assets/left-arrow.png" id="icon-arrow">
				<p id="text-community">Community</p>
				</a>
				
				</div>
				<p id="text-zone">¡Select a zone and communicate with more women like you!</p>
				<p><a href="#/north" class="Zones">North Zone</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_gladysMuñoz.jpg">
						<img class="user" src="./assets/user_saraGutierrez.jpg">
						</div>
				</div>
				<p><a href="#/north" class="see-all"><strong>See everyone</strong></a></p>
				<p><a href="#/center" class="Zones">Central Zone</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_catalinaJara.jpg">
						<img class="user" src="./assets/user_natalyGilbert.jpg">
						</div>
				</div>
				<p><a href="#/center" class="see-all"><strong>See everyone</strong></a></p>
				<p><a href="#/south" class="Zones">South Zone</a></p>
				<div>
						<div>
						<img class="user" src="./assets/user_samantaRamirez.jpg">
						<img class="user" src="./assets/user_paulaPerez.jpg">
						</div>
				</div>
				<p><a href="#/south" class="see-all"><strong>See everyone</strong></a></p>
    `;
    divCommunity.innerHTML = viewCommunity;
    return divCommunity;
};