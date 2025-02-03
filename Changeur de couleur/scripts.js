const tableauCouleurSombres = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
    const ramdomIndex = Math.floor( tableauCouleurSombres.length * Math.random() );
    return ramdomIndex;
}


const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changerArrierePlan() {
    const couleur = tableauCouleurSombres[getRandomIndex()];
    bgHexCodeSpanElement.innerText = couleur;
    body.style.backgroundColor = couleur;
}

const btn = document.querySelector("#btn");
btn.onclick = changerArrierePlan;

