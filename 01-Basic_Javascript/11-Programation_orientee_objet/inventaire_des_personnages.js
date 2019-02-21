// Complétez ce programme issu du cours pour y ajouter la gestion de l'inventaire des personnages. Voici les améliorations à intégrer :

// L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
// Tous les personnages possèdent initialement 10 pièces d'or et une clé.
// L'inventaire doit être affiché dans la description d'un joueur.
// Lorsqu'un personnage tue un adversaire, il récupère dans son propre inventaire le nombre de pièces d'or et de clés de cet adversaire.
// Ajoutez votre code ici
class Personnage {
  constructor(name, life, strong) {
    this.name = name;
    this.life = life;
    this.strong = strong;
    this.xp = 0;
    this.gold = 10;
    this.keys = 1;
    this.inventaire = {
      or: 10,
      cles: 1
    };
  }
  decrire() {
    return `${this.name} a ${this.life} points de vie, ${this.strong} en force et ${this.xp} points d'expérience, ${this.gold} pièces d'or et ${this.keys} clé(s)`
  }

  attaquer(cible) {
    if (this.life > 0) {
      const degats = this.strong;
      console.log(
        `${this.name} attaque ${
          cible.name
        } et lui inflige ${degats} points de dégâts`
      );
      cible.life -= degats;
      if (cible.life > 0) {
        console.log(`${cible.name} a encore ${cible.life} points de vie`);
      } else {
        cible.life = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} a tué ${
            cible.name
          } et gagne ${bonusXP} points d'expérience, ${
            cible.inventaire.or
          } pièces d'or et ${cible.inventaire.cles} clé(s)`
        );
        this.xp += bonusXP;
        // L'inventaire de la victime est transféré à son vainqueur
        this.inventaire.or += cible.inventaire.or;
        this.inventaire.cles += cible.inventaire.cles;
      }
    } else {
      console.log(
        `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
      );
    }
  }
};


// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
const aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

const monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());

