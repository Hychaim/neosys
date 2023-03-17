const btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", () => {
    document.getElementById("nav-section-links").classList.toggle("show");
});

const accentWord = document.querySelector("#heading .accent");
const words = {
    "Future": "#fff200",
    "Dreams": "#8000ff",
    "Galaxy": "#4c00ff",
    "Rocket": "#ff8000",
    "Fusion": "#ff4800",
    "Cosmic": "#0080ff",
    "Astron": "#0004ff",
    "Vision": "#77ff00",
    "Invent": "#00ff80",
    "Nebula": "#8000ff",
    "Photon": "#ffd000",
    "Plasma": "#008cff",
    "Spiral": "#80ff00",
    "Utopia": "#00e5ff",
    "Vortex": "#ff005d",
    "Zenith": "#ffb300",
    "Online": "#00ff00",
    "Cortex": "#cc00ff",
    "Neotek": "#00ffc8",
};
let interval = null;

interval = setInterval(() => {
    const index = Math.floor(Math.random() * Object.keys(words).length);
    accentWord.textContent = Object.keys(words)[index];
    accentWord.style.color = Object.values(words)[index];
    document.documentElement.style.setProperty("--accent-color-1", Object.values(words)[index]);
}, 1000);