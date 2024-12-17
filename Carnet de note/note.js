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

/* Moyenne de la classe : average-goes-here. Votre note : note- va ici. Vous avez échoué au cours. */

/* Moyenne de la classe : average-goes-here. Votre note : grade-goes-here. Vous avez réussi le cours. */