import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {
  games: any;
  admin: boolean = false;

  constructor(
    private gameService: GameService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isAdmin().subscribe((isAdmin) => {
      this.admin = isAdmin;
    });

    this.getAll();

    this.gameService.refresh$.subscribe(() => {
      this.getAll();
    });
  }

  async getAll(): Promise<void> {
    this.games = await this.gameService.getAllGame();
  }
}
