// Ecrivez un programme qui :

// crée un tableau nommé mousquetaires contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
// affiche le nom de chaque mousquetaire à l'aide d'une boucle for ;
// ajoute au tableau le mousquetaire d'Artagnan ;
// affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach().
// supprime Aramis du tableau ;
// affiche le nom de chaque mousquetaire avec une boucle for-of.
const mousquetaires = ["Atos", "Porthos", "Aramis"];

mousquetaires.forEach(nom => {
  console.log(nom);
});

mousquetaires.push("d'Artagnan");

mousquetaires.forEach(nom => {
  console.log(nom);
});
