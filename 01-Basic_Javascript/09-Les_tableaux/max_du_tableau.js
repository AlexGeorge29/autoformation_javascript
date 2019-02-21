// Complétez le programme pour qu'il calcule et affiche ensuite la plus grande valeur présente dans le tableau.

const valeurs = [3, 11, 7, 2, 9, 10];
let max = 0;
valeurs.forEach(nombre => {
  if (max < nombre) {
    max = nombre;
  } else {
    max = max;
  }
  return max;
})
console.log(max);
