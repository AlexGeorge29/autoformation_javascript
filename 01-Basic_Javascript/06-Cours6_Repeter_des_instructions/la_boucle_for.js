console.log("Début du programme");
let compteur;
for (compteur = 1; compteur <= 5; compteur++) {
  console.log(compteur);
}
console.log("Fin du programme");

// déclaration dans la variable
for (let i = 1; i <= 5; i++) {
    console.log(i); // OK
}
console.log(i); // Erreur : la variable i n'est pas visible ici
