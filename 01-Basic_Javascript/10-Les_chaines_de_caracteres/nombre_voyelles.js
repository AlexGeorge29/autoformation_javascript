// Complétez le programme en y ajoutant une fonction compterVoyelles() qui prend un mot en paramètre et renvoie son nombre de voyelles.
// Ajoutez votre code ici
const voyelle = ["a", "e", "i", "o", "u"];

function compterVoyelles(mot) {
  let sum = 0;
  // console.log(mot.toLowerCase)
  // console.log(Array.from(mot.toLowerCase()));
  Array.from(mot.toLowerCase()).forEach(caractere => {
    if (voyelle.includes(caractere)) {
      sum += 1;
    }
  });
  return sum
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7
