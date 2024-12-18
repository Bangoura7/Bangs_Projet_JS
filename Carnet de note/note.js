function moyenneEleve(notes) {
  let sommes = 0 
  for (const note of notes) { 
    sommes += note
  }
  return sommes/notes.length
}

console.log(moyenneEleve([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))
console.log(moyenneEleve([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

function noteMention(notes) {
  if (notes === 100) {
    return "A++"
  }else if (notes >= 90) {
    return "A"
  }else if (notes >= 80) {
    return "B"
  }else if (notes >= 70) {
    return "C"
  }else if (notes >= 60) {
    return "E"
  }else {
    return "F"
  }
}

console.log(noteMention(100))
console.log(noteMention(98))
console.log(noteMention(85))
console.log(noteMention(71))
console.log(noteMention(65))
console.log(noteMention(30))

function admissionEleve(notes) {

  if (noteMention(notes) !== "F") {
    return "Vous êtes admis avec une note de : " + notes
  }else {
    return "Désolez vous êtes pas admis avec une note : " + notes
  }
}
console.log(admissionEleve(100))
console.log(admissionEleve(85))
console.log(admissionEleve(98))
console.log(admissionEleve(71))
console.log(admissionEleve(65))
console.log(admissionEleve(30))


function envoiMsg(noteClasse, noteEleve) {
  const moyenneClasse = moyenneEleve(noteClasse)
  const moyenEleve =  noteMention(noteEleve)

  if (admissionEleve(noteEleve)) {
    return ("Moyenne de la classe : " + moyenneClasse + ".  Votre note : " + moyenEleve + ". Vous avez échouer au cours.");
  }else {
    return ("Moyenne de la classe : " + moyenneClasse + ".  Votre note : " + moyenEleve + ". Vous avez reussir le cours.");
  }
}

/* Moyenne de la classe : average-goes-here. Votre note : note- va ici. Vous avez échoué au cours. */

/* Moyenne de la classe : average-goes-here. Votre note : grade-goes-here. Vous avez réussi le cours. */

console.log(envoiMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))