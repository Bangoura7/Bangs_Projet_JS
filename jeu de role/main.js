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
    },
    /*  cet objet corresponde au contenu de la fonction aller Grotte */
    {
        nom: "Grote",
        "button text": ["Combattre la bave", "Combattre la bête à crocs", "Se rendre sur la place du village"],
        "button fonctions": [combattreSlime, combattreBete, allerville],
        texte: "Vous entrez dans la grotte. Vous voyez quelques monstres."
    }
];

/* Déclaration des l'armes comme tableau d'objet qui contient le nom et la puissance */
const armes = [
    {
        nom: "Bâton",
        puissance: 5
    },
    {
        nom: "dague",
        puissance: 30
    },
    {
        nom: "marteau à griffe",
        puissance: 50
    },
    {
        nom: "épée",
        puissance: 100
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
    button1.innerText = localite["button text"][0];
    button2.innerText = localite["button text"][1];
    button3.innerText = localite["button text"][2];

    button1.onclick = localite["button fonctions"][0];
    button2.onclick = localite["button fonctions"][1];
    button3.onclick = localite["button fonctions"][2];

    texte.innerText = localite.texte;
}

function allerville() {
    update(localites[0]);
}

function alMagasin() {
    update(localites[1]);
}

function alGrotte() {
    update(localites[2]);
}

function combatDragon() {
    button3.innerText = "Se rendre sur la place du village";
}

function acheterVie() {

    if (or >= 10) {
        or -= 10;
        vie += 10;
        OrTexte.innerText = or;
        vieTexte.innerText = vie
    }else {
        texte.innerText = "Vous n'avez pas assez d'or pour acheter de la Vie.";
    }
    
}

function acheterArme() {
    if (or >= 30 ) {
        or -= 30;
        indexDeLarmeActuel ++;
        OrTexte.innerText = or;
        let nouvelArme = armes[indexDeLarmeActuel].nom;
        texte.innerText = "Vous disposez maintenant d'un " + nouvelArme + ".";
        inventaire.push(nouvelArme);
        texte.innerText += " Dans votre inventaire, vous avez :" + inventaire; 
    }else {
        texte.innerText = "Vous n'avez pas assez d'or pour acheter une arme.";
    }
}

function combattreSlime() {

}

function combattreBete() {

}