let caracter = "*";
let comptage = 8;
let lignes = [];
let resultat = ""

for (let i = 0; i < comptage; i++) {

  lignes.push(caracter.repeat(i));  

}


for (const ligne of lignes) {
    resultat += ligne + "\n"
}
console.log(resultat)


