let caracter = "*";
let comptage = 8;
let lignes = [];
let resultat = ""

for (let i = 0; i < comptage; i++) {
  lignes.push(i);  
}
console.log(lignes);

for (const ligne of lignes) {
    resultat += ligne
}
console.log(resultat)


