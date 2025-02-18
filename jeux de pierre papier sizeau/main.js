function getNumberAleatoire() {
    const options = ["Pierre", "Papier", "Ciseaux"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

let scoreJoueur = 0;
let scoreMachine = 0;

function joueurAgagner(joueur, machine) {
    return (
        (joueur === "Pierre" && machine === "Ciseaux") ||
        (joueur === "Ciseaux" && machine === "Papier")  || 
        (joueur === "Papier" && machine === "Pierre")
    )
}

function obtenierResultat(userOption) {
    const resultatMachine = getNumberAleatoire();
    

    if (joueurAgagner(userOption, resultatMachine)) {
        scoreJoueur ++;
        return `"Le joueur gagne ! ${userOption} bat ${resultatMachine}".`;

    } else if (userOption === resultatMachine) {
        // Match nul
        return `C'est un match nul ! Les deux ont choisi ${userOption}.`;
    } else {
        // La machine gagne
        scoreMachine++;
        return `"La machine gagne ! ${resultatMachine} bat ${userOption}".`;
    }
}

const elementScoreJoueur = document.getElementById("score-joueur");
const elementScoreMachine = document.getElementById("score-machine");
const resultatTour = document.getElementById("results-msg");

const gagantMsg = document.getElementById("gagner-msg");
const optionContainer = document.querySelector(".options-container");
const réinitialiserGameBtn = document.getElementById("reset-game-btn");

function afficherResultat(userOption) {
    resultatTour.innerHTML = obtenierResultat(userOption);
    elementScoreJoueur.innerHTML = scoreJoueur;
    elementScoreMachine.innerHTML = scoreMachine;
}


const PierreBtn = document.getElementById("pierre-btn");


