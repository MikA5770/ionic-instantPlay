import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.page.html',
  styleUrls: ['./game-edit.page.scss'],
})
export class GameEditPage implements OnInit {
  game!: Game;
  id!: string;
  admin: boolean = false;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.get();
  }

  async presentToast(type: string) {
    const toast = this.toastCtrl.create({
      message: type === 'supp' ? 'Jeu supprimé' : 'Jeu modifié',
      duration: 2000,
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router
          .navigate(type === 'supp' ? ['/games'] : ['/game', this.id])
          .then(() => {
            this.gameService.triggerRefresh();
          });
      }, 2000);
    });
  }
  async get(): Promise<void> {
    this.game = await this.gameService.getOneGame(this.id);
  }

  async modif(): Promise<void> {
    this.gameService.editGame(this.id, this.game);
    this.presentToast('modif');
  }

  async supprimer(): Promise<void> {
    await this.gameService.deleteGame(this.id);
    this.presentToast('supp');
  }

  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
    },
    {
      text: 'Supprimer',
      role: 'confirm',
      handler: () => {
        this.supprimer();
      },
    },
  ];

}
