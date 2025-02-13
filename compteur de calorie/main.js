// Sélectionne l'élément du formulaire avec l'ID "calorie-counter"
const compteurCalorie = document.getElementById("calorie-counter");

// Sélectionne l'élément input pour le budget calorique avec l'ID "budget"
const nombreEntreBudget = document.getElementById("budget");

// Sélectionne le menu déroulant pour choisir le type d'entrée (petit-déjeuner, déjeuner, etc.)
const entreDouroulante = document.getElementById("entrer-deroulante");

// Sélectionne le bouton pour ajouter une entrée (aliment ou exercice)
const ajouteEntrer = document.getElementById('ajouter-entrer');

// Sélectionne le bouton pour nettoyer le formulaire
const netoyer = document.getElementById('netoyer');

// Sélectionne l'élément où les résultats seront affichés
const sortie = document.getElementById('sortie');

// Variable pour suivre si une erreur s'est produite
let estErreur = false;

// Fonction pour supprimer les caractères spéciaux (+, -, espaces) d'une chaîne
function supprimerCaractEntrer(str) {
    const regex = /[+-\s]/g; // Expression régulière pour trouver les caractères à supprimer
    return str.replace(regex, ''); // Retourne la chaîne nettoyée
}

// Fonction pour vérifier si une entrée est invalide (contient des nombres en notation scientifique)
function entreNonValide(str) {
    const regex = /\d+e\d+/i; // Expression régulière pour détecter la notation scientifique
    return str.match(regex); // Retourne true si l'entrée est invalide
}

// Fonction pour ajouter une nouvelle entrée (aliment ou exercice) dans le formulaire
function ajouterEntrer() {
    // Sélectionne le conteneur d'entrée correspondant à la valeur sélectionnée dans le menu déroulant
    const contenerEntrerCible = document.querySelector(`#${entreDouroulante.value} .input-container`);

    // Calcule le numéro de la nouvelle entrée en fonction du nombre d'entrées existantes
    const numeroEntrer = contenerEntrerCible.querySelectorAll('input[type="text"]').length + 1;

    // Crée le HTML pour la nouvelle entrée (champ de texte pour le nom et champ numérique pour les calories)
    const HTMLString = `
        <label for="${entreDouroulante.value}-${numeroEntrer}-nom"> Entrer ${numeroEntrer} Nom </label>
        <input type="text" placeholder="Nom" id ="${entreDouroulante.value}-${numeroEntrer}-nom" />

        <label for="${entreDouroulante.value}-${numeroEntrer}-calories">Entrer ${numeroEntrer} Calories </label>
        <input type="number" min="0" placeholder="Calories" id ="${entreDouroulante.value}-${numeroEntrer}-calories" />
    `;

    // Ajoute le HTML au conteneur d'entrée
    contenerEntrerCible.insertAdjacentHTML('beforeend', HTMLString);
}

// Fonction pour calculer le total des calories à partir d'une liste d'entrées
function obtenerCalorieEntrer(liste) {
    let calories = 0; // Variable pour stocker le total des calories

    // Parcourt chaque élément de la liste
    for (const i of liste) {
        // Nettoie la valeur de l'entrée (supprime les caractères spéciaux)
        const valeurCourante = supprimerCaractEntrer(i.value);

        // Vérifie si l'entrée est invalide
        const entrerValide = entreNonValide(valeurCourante);
        if (entrerValide) {
            // Affiche une alerte si l'entrée est invalide
            alert(`Entrer non valide : ${entrerValide[0]}`);
            estErreur = true; // Marque qu'une erreur s'est produite
            return null; // Retourne null pour arrêter le calcul
        }

        // Ajoute la valeur nettoyée au total des calories
        calories += Number(valeurCourante);
    }
    return calories; // Retourne le total des calories
}

// Fonction pour calculer les calories restantes
function calculerCalories(e) {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    estErreur = false; // Réinitialise la variable d'erreur

    // Sélectionne toutes les entrées de calories pour chaque catégorie (petit-déjeuner, déjeuner, etc.)
    const entrerNumPetitDejeuner = document.querySelectorAll("#petit-dejeuner input[type='number']");
    const entrerNumDejeuner = document.querySelectorAll("#dejeuner input[type='number']");
    const entrerNumDinner = document.querySelectorAll("#dinner input[type='number']");
    const entrerNumCollation = document.querySelectorAll("#collations input[type='number']");
    const entrerExercieNum = document.querySelectorAll("#exercice input[type='number']");

    // Calcule le total des calories pour chaque catégorie
    const caloriePetitDejeuner = obtenerCalorieEntrer(entrerNumPetitDejeuner);
    const calorieDejeuner = obtenerCalorieEntrer(entrerNumDejeuner);
    const calorieDinner = obtenerCalorieEntrer(entrerNumDinner);
    const calorieCollation = obtenerCalorieEntrer(entrerNumCollation);
    const calorieExercice = obtenerCalorieEntrer(entrerExercieNum);
    const budgetCalories = obtenerCalorieEntrer([nombreEntreBudget]);

    // Si une erreur s'est produite, arrête la fonction
    if (estErreur) {
        return;
    }

    // Calcule la consommation totale de calories
    const consomationCalorie = caloriePetitDejeuner + calorieDejeuner + calorieDinner + calorieCollation;

    // Calcule les calories restantes
    const calorieRestant = budgetCalories - (consomationCalorie + calorieExercice);

    // Détermine si l'utilisateur est en surplus ou en déficit
    const surplusOUdeficit = calorieRestant < 0 ? "Surplus" : "Déficit";

    // Affiche les résultats dans l'élément de sortie
    sortie.innerHTML = `
        <span class="${surplusOUdeficit.toLowerCase()}">${Math.abs(calorieRestant)} Calorie ${surplusOUdeficit}</span>
        <hr />
        <p>${budgetCalories} Calorie budgeté</p>
        <p>${consomationCalorie} Calorie consommées</p>
        <p>${calorieExercice} Calorie dépensées</p>
    `;

    // Affiche l'élément de sortie en retirant la classe "masquer"
    sortie.classList.remove("masquer");
}

// Fonction pour effacer le formulaire
function effacerFormulaire() {
    // Sélectionne tous les conteneurs d'entrée avec la classe .input-container
    const entrerContainer = Array.from(document.querySelectorAll(".input-container"));

    // Vide le contenu de chaque conteneur
    for (const container of entrerContainer) {
        container.innerHTML = "";
    }

    // Réinitialise le champ de budget
    nombreEntreBudget.value = "";

    // Efface le texte de sortie
    sortie.innerText = "";

    // Masque l'élément de sortie en ajoutant la classe "masquer"
    sortie.classList.add("masquer");
}

// Ajoute un écouteur d'événement pour le bouton "Ajouter une entrée"
ajouteEntrer.addEventListener('click', ajouterEntrer);

// Ajoute un écouteur d'événement pour la soumission du formulaire
compteurCalorie.addEventListener('submit', calculerCalories);

// Ajoute un écouteur d'événement pour le bouton "Netoyer"
netoyer.addEventListener('click', effacerFormulaire);