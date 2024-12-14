let caracter = "*"
let comptage = 8
let lignes = []



function rangeDeLigne(numeroDeLigne, nombreDeLigne) {
  return ( 
   " ".repeat(nombreDeLigne - numeroDeLigne) +
   caracter.repeat(numeroDeLigne) +
   " ".repeat(nombreDeLigne - numeroDeLigne)
  )

}


for (let i = 0; i < comptage; i++) {

  lignes.push(rangeDeLigne(i + 1, comptage));  

}

let resultat = ""
for (const ligne of lignes) {
    resultat += ligne + "\n"
}
console.log(resultat)
/* les fonctions */


