//Declaration des variables
let xp = 0;
let vie = 100;
let or = 50;
let indexDeLarmeActuel = 0;
let combat ;
let vieDuMonstre;
let inventaire = ["stick"];


// Declaration des variables pour recuperer les id html des span pour le statique de joueur
const xpTexte = document.querySelector("#xpTexte");
const vieTexte= document.querySelector("#vieTexte");
const OrTexte= document.querySelector("#OrTexte");

// Declaration des variables pour recuperer les id button pour rende dynamique la page
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

// Declaration des variables pour recuperer les id span pour le statistique du monstre
const  nomMonstre = document.querySelector("#nomMonstre");
const  vieMonstre= document.querySelector("#vieMonstre");

// Declaration des variable pour recuper l'id text
const texte = document.querySelector("#texte");

// Declaration des variables recuperer l'id de la vie du dragon qui est définie comme varible non initialiser
const vieDuMonstreText = document.querySelector("#vieDuMonstre");

button1.onclick = alMagasin;
button2.onclick = alGrotte;
button3.onclick = combatDragon;

// Declaration des fonctions et leur initialisation
function alMagasin() {
    button1.innerText = "Acheter 10 points de vie (10 or)";
    button2.innerText = "Acheter une arme (30 or)";
    button3.innerText = "Se rendre sur la place du village";

    button1.onclick = AcheterVie;
    button2.onclick = AcheterArme;
    button3.onclick = Allerville;
}

function alGrotte() {
    button2.innerText = "Acheter une arme (30 or)";
}

function combatDragon() {
    button3.innerText = "Se rendre sur la place du village";
}