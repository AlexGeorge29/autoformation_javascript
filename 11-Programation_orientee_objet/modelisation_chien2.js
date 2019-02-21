// Ajoutez votre code ici
class Chien {
  constructor(name, race, taille) {
    this.name = name;
    this.race = race;
    this.taille = taille;
  };
  decrire() {
    return `${this.name} est un ${this.race} mesurant ${this.taille}`;
  }
  aboyer() {
    if (this.race === "mâtin de Naples") {
    return `Grrr ! Grrr !`;
  } else {
    return `Wouaf ! Wouaf`;
  };
  };
};


const crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(crockdur.decrire());
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${crockdur.nom} aboie : ${crockdur.aboyer()}`);

const milou = new Chien("Milou", "fox-terrier", 26);
// "Milou est un fox-terrier mesurant 26 cm"
console.log(milou.decrire());
// "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
console.log(`Tiens, un chat ! ${milou.nom} aboie : ${milou.aboyer()}`);
