export const navBar = () => {
  const divNavBar = document.createElement("div");
    const viewNavBar = `
      <footer class="footer">
      <div id="navbar-style">
      <ul>
      <li><a id="nav-channels" class="nav-buttons" href="#/channels">Channels</a></li>
      <li> <a id="nav-community" class="nav-buttons" href="#/community">Community</a></li>
      <li> <a id="nav-inbox" class="nav-buttons" href="#/inbox">Messages</a></li>
      </ul>
      </div>
      </footer> 
      `;
    divNavBar.innerHTML = viewNavBar;
    return divNavBar;
};

