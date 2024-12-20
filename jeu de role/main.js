//Declaration des variables
let xp = 0;
let vie = 100;
let or = 50;
let indexDeLarmeActuel = 0;
let combat ;
let vieDuMonstre;
let inventaire = ["stick"];

const localites = [
   /*  cet objet corresponde à des fonctinnalité de l'interface */
    {
        nom: "Place de la ville",
        "button text": ["Aller au magasin", "Aller à la grotte", "Combattre le dragon"],
        "button fonctions": [alMagasin, alGrotte, combatDragon],
        texte: "Vous êtes sur la place du village. Vous voyez un panneau qui indique 'Magasin'"
    },
    /*  cet objet corresponde au contenu de la fonction aller au Magasin */
    {
        nom: "Magasin",
        "button text": ["Acheter 10 points de vie (10 or)", "Acheter une arme (30 or)", "Se rendre sur la place du village"],
        "button fonctions": [acheterVie, acheterArme, allerville],
        texte: "Vous entrez dans le magasin."
    }
];

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
function update(localite) {

}

function allerville() {
    button1.innerText = "Aller au magasin";
    button2.innerText = "Aller à la grotte";
    button3.innerText = "Combattre le dragon";

    button1.onclick = acheterVie;
    button2.onclick = acheterArme;
    button3.onclick = allerville;

    texte.innerText = "Vous êtes sur la place du village. Vous voyez un panneau qui indique 'Magasin'";
}

function alMagasin() {
    button1.innerText = "Acheter 10 points de vie (10 or)";
    button2.innerText = "Acheter une arme (30 or)";
    button3.innerText = "Se rendre sur la place du village";

    button1.onclick = acheterVie;
    button2.onclick = acheterArme;
    button3.onclick = allerville;

    texte.innerText = "Vous entrez dans le magasin.";
}

function alGrotte() {
    button2.innerText = "Acheter une arme (30 or)";
}

function combatDragon() {
    button3.innerText = "Se rendre sur la place du village";
}

function acheterArme() {

}

function acheterArme() {

}