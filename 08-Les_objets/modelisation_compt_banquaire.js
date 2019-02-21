// Complétez ce programme pour créer un objet compte ayant les propriétés suivantes :

// Une propriété titulaire valant "Alex".
// Une propriété solde valant initialement 0.
// Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
// Une méthode decrire() renvoyant la description du compte.
// Utilisez cet objet pour afficher sa description, le créditer de 250, puis le débiter de 80, et enfin afficher de nouveau sa description.
const compt = {
  titulaire: "Alex",
  solde: 0,

  crediter(montant) {
    return this.solde += montant;
  },
  decrire() {
    return `Le titulaire ${this.titulaire} possède un solde de ${this.solde} dollars!`;
  }
};

console.log("Etat initial")
console.log(compt.decrire())
console.log("Créditer de 250 dollars")
compt.crediter(250)
console.log(compt.decrire())
console.log("Débiter de 80 dollars")
compt.crediter(-80)
console.log(compt.decrire())
