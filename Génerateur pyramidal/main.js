let caracter = "1"
let comptage = 20
let lignes = []
let inverse = false


function rangeDeLigne(numeroDeLigne, nombreDeLigne) {
  return ( 
   " ".repeat(nombreDeLigne - numeroDeLigne) +
   caracter.repeat(2 * numeroDeLigne -1) +
   " ".repeat(nombreDeLigne - numeroDeLigne)
  )

}
/* Les differents type de boucle pour faire le pyramide */

for (let i = 1; i < comptage; i++) {

    if (inverse) {
      lignes.unshift(rangeDeLigne(i  , comptage));
    }else {
      lignes.push(rangeDeLigne(i  , comptage));
    }
    

} 

/* while (lignes.length < comptage) {
  lignes.push(rangeDeLigne(lignes.length + 1, comptage))
  
} */

/* for (let i = comptage; i > 0; i--) {
  lignes.push(rangeDeLigne(i, comptage))
} */



let resultat = ""
for (const ligne of lignes) {
    resultat += ligne + "\n"
}
console.log(resultat)
/* les fonctions */


