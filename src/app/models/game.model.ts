export class Game {
  titre: string;
  plateforme: string[]; 
  studio: string;
  img: string;
  prix: number;

  constructor() {
    this.titre = "";
    this.plateforme = [];
    this.studio = "";
    this.img = "";
    this.prix = 0;
  }
}
