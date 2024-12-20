export class Game {
  titre: string;
  description: string;
  plateforme: string[]; 
  studio: string;
  img: string;
  prix: number;

  constructor() {
    this.titre = "";
    this.description = "";
    this.plateforme = [];
    this.studio = "";
    this.img = "";
    this.prix = 0;
  }
}
