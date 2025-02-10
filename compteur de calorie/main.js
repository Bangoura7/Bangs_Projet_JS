const compteurCalorie = document.getElementById("calorie-counter");
const nombreEntreBudget = document.getElementById("budget");
const entreDouroulante = document.getElementById("entrer-deroulante");
const ajouteEntrer = document.getElementById('ajouter-entrer');
const netoyer = document.getElementById('netoyer');
const sortie = document.getElementById('sortie');

let estErreur = false;

function supprimerCaractEntrer(str) {
    const regex = /[+-\s]/g ;
    return str.replace(regex, '');
}

function entreNonValide(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);   
}

function ajouterEntrer() {
    const contenerEntrerCible = document.querySelector(`#${entreDouroulante.value} .input-container`);
    const numeroEntrer = contenerEntrerCible.querySelectorAll("input[type='text']").length +1 ;
    console.log(numeroEntrer);
    const HTMLString = `
        <label for="${entreDouroulante.value}-${numeroEntrer}-nom"> Entrer ${numeroEntrer} Nom </label>
        <input type="text" placeholder="Nom" id ="${entreDouroulante.value}-${numeroEntrer}-nom" />

        <label for="${entreDouroulante.value}-${numeroEntrer}-calories">Entrer ${numeroEntrer} Calories </label>
        <input type="number" min="0" placeholder="Calories" id ="${entreDouroulante.value}-${numeroEntrer}-calories" />
    `;
    contenerEntrerCible.insertAdjacentHTML('beforeend', HTMLString);
}

ajouteEntrer.addEventListener('click', ajouterEntrer);

function obtenerCalorieEntrer(liste) {
    let calories = 0;

    for(const i of liste) {
        const valeurCourante = supprimerCaractEntrer(i.value);
        const entrerValide = entreNonValide(valeurCourante);
        if (entrerValide) {
            alert(`Entrer non valide : ${entreNonValide[0]}`);
            estErreur = true;
            return null;
        }
        
        calories += Number(valeurCourante);
      return calories;
    }
}

function calculerCalories(e) {
    e.preventDefault();
    estErreur = false;
}



