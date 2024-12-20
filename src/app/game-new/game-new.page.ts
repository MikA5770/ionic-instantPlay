import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.page.html',
  styleUrls: ['./game-new.page.scss'],
})
export class GameNewPage implements OnInit {
  game!: Game;

  constructor(
    private gameService: GameService,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.game = new Game();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau jeu ajouté !',
      duration: 2000,
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.gameService.triggerRefresh();
        this.router.navigate(['/games']);
      }, 2000);
    });
  }

  add() {
    this.gameService.addGame(this.game);
    this.game = new Game()
    this.presentToast();
  }
}