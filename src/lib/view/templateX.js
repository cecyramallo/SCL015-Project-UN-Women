export const welcome = () => {
    const divWelcome = document.createElement("div");
    const viewWelcome = `
        <p>XXXX</p>
        <button>START</button>
    `;
    divWelcome.innerHTML = viewWelcome;
    return divWelcome;
};