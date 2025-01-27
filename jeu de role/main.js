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
    },
     /*  cet objet corresponde à l'emplacement du monstre pour le combattre */
    {
        nom: "Combat",
        "button text": ["Attack", "Esquiver", "Run"],
        "button fonctions": [attack, esquiver, allerville],
        texte: "Vous combattez un monstre"
    },
     /*  cet objet corresponde à l'emplacement du monstre pour la defait du monstre */
    {
        nom: "tuer le monstre",
        "button text": ["Se rendre sur la place du village", "Se rendre sur la place du village", "Se rendre sur la place du village"],
        "button fonctions": [allerville, allerville, caractCache],
        texte: "Le monstre hurle Arg ! lorsqu'il meurt. Vous gagnez des points d'expérience et trouvez de l'or."
    },
     /*  cet objet corresponde à l'emplacement du joueur pour la defait du jour */
    {
        nom: "Perde",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button fonctions": [redemarer, redemarer, redemarer ],
        texte: "Vous êtes mort. &#x2620;"
    },
    /*  cet objet corresponde à l'emplacement du joueur pour le gagne du jour */
    {
        nom: "Gagner",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button fonctions": [redemarer, redemarer, redemarer ],
        texte: "Tu as vaincu le dragon ! TU GAGNES LE JEU ! &#x1F389;"
    },
    { 
        nom: "easter egg", 
        "button text": ["2", "8", "Aller sur la place du village ?"], 
        "button fonctions": [pickDeux, pickHuit, allerville], 
        texte: "Tu trouves un jeu secret. Choisissez un numéro ci-dessus. Dix numéros seront choisis au hasard entre 0 et 10. Si le numéro que vous choisissez correspond à l'un des numéros tirés au sort, vous gagnez !" 
    },
];

/* Déclaration de la variable monstre pour stockers les monstres*/
const monsters = [
    {
      nom: "slime",
      level: 2,
      vie: 15
    },
    {
      nom: "bête à crocs",
      level: 8,
      vie: 60
    },
    {
      nom: "dragon",
      level: 20,
      vie: 300
    }
];
/* Déclaration des l'armes comme tableau d'objet qui contient le nom et la puissance */
const armes = [
    { nom: "Bâton", puissance: 5 },
    { nom: "dague", puissance: 30 },
    { nom: "marteau à griffe", puissance: 50 },
    { nom: "épée", puissance: 100 }

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
const statistiqesDuMonstre = document.querySelector("#statistiqesDuMonstre");

// Declaration des variable pour recuper l'id text
const texte = document.querySelector("#texte");

// Declaration des variables recuperer l'id de la vie du dragon qui est définie comme varible non initialiser
const vieDuMonstreText = document.querySelector("#vieDuMonstre");

button1.onclick = alMagasin;
button2.onclick = alGrotte;
button3.onclick = combatDragon;

// Declaration des fonctions et leur initialisation
function update(localite) {
    statistiqesDuMonstre.style.display = "none";

    button1.innerText = localite["button text"][0];
    button2.innerText = localite["button text"][1];
    button3.innerText = localite["button text"][2];

    button1.onclick = localite["button fonctions"][0];
    button2.onclick = localite["button fonctions"][1];
    button3.onclick = localite["button fonctions"][2];

    texte.innerHTML = localite.texte;
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
   if (indexDeLarmeActuel < armes.length - 1) {
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
   }else {
        texte.innerText = "Vous avez déjà l'arme la plus puissante !";
        button2.innerText = "Vendre l'arme pour 15 or";
        button2.onclick = vendreLarme;
   }
}

function vendreLarme() {

    if (inventaire.length > 1) {
        or += 15;
        OrTexte.innerText = or; 
        let larmeActuel = inventaire.shift();
        texte.innerText = "Vous avez vendu un : " + larmeActuel + ".";
        texte.innerText += " Dans votre inventaire, vous avez : " + inventaire;
    }else {
        texte.innerText = "Ne vendez pas votre seule arme !";
    }

}

function combattreSlime() {
    combat = 0;
    allerCombatre();

}

function combattreBete() {
    combat = 1;
    allerCombatre();
}

function combatDragon() {
    combat = 2;
    allerCombatre();
}

function allerCombatre() {
    update(localites[3]);
    vieDuMonstre = monsters[combat].vie;
    statistiqesDuMonstre.style.display = 'block';
    nomMonstre.innerText = monsters[combat].nom;
    vieMonstre.innerText = monsters[combat].vie;

}

function attack() {
    texte.innerText = "Le " + monsters[combat].nom + " Attack"
    texte.innerText += " Vous l'attaquez avec votre : " + armes[indexDeLarmeActuel].nom + ".";

    vie -= getMonstreValeurAttack(monsters[combat].level);

    if (isCoupMonstre) {
        vieDuMonstre -= armes[indexDeLarmeActuel].puissance + Math.floor(Math.random() * xp) + 1;
    }else {
        texte.innerText += "Vous avez manqué votre Coup.";
    }
     
    vieTexte.innerText = vie;
    vieMonstre.innerText = vieDuMonstre;

    
    if (vie <= 0) {
        perdue();
    }else if (vieDuMonstre <= 0) {
        
        if (combat === 2) {
            gagnerJeux();
        }else {
            defaiteDuMonstre();
        }
       
    }

    if ((Math.random() <= .1) && (inventaire.length !== 1)) {
        texte.innerText += " Votre " + inventaire.pop() + " est cassé.";
        indexDeLarmeActuel--;
    }
}

function isCoupMonstre() {
    return ((Math.random() > .2) || (vie < 20 ));
}

function getMonstreValeurAttack(level) {
    const attaquer = (level * 5) - Math.floor(Math.random() * xp);
    return attaquer > 0 ? attaquer : 0 ;
}
function esquiver() {
    texte.innerText = "Vous esquivez l'attaque du : " + monsters[combat].nom;
}

function perdue() {
    update(localites[5]);
}

function gagnerJeux() {
    update(localites[6]);
}

function defaiteDuMonstre() {
    or += Math.floor(monsters[combat].level * 6.7);
    xp += monsters[combat].level;
    OrTexte.innerText = or;
    xpTexte.innerText = xp;
    update(localites[4]);
}

function redemarer() {
    xp = 0
    vie = 100;
    or = 50;
    indexDeLarmeActuel = 0;
    inventaire = ["stick"];
    xpTexte.innerText = xp;
    vieTexte.innerText = vie;
    OrTexte.innerText = or;
    allerville();
}

function caractCache() {
    update(localites[7]);
}

function pick(guess) {
    const nombres = [];
    while (nombres.length < 10) {
        nombres.push(Math.floor(Math.random()* 11));
        texte.innerText = "Vous avez choisi" +  guess + ". Voici les nombres aléatoires :";
    }

    for (let i = 0; i < 10; i++) {
        texte.innerText += nombres[i] + "\n";
    }

    if (nombres.includes(guess)) {
        texte.innerText ="C'est vrai ! Vous gagnez 20 pièces d'or !";
        or += 20;
        OrTexte.innerText = or;
    }else {
        vie -= 10;
        vieTexte.innerText = vie;
        texte.innerText += "Faux ! Vous perdez 10 points de vie !";
        if (vie <= 0) {
            perdue();
        }
    }
   
}

function pickDeux() {
    pick(2);
}

function pickHuit() {
    pick(8);
}
