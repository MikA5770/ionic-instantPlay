import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-one-game',
  templateUrl: './one-game.page.html',
  styleUrls: ['./one-game.page.scss'],
})
export class OneGamePage implements OnInit {
  game!: Game;
  id!: string;
  admin: boolean = false;

  constructor(
    private gameService: GameService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.isAdmin().subscribe((isAdmin) => {
      this.admin = isAdmin;
    });

    this.id = this.route.snapshot.params['id'];
    this.get();
    this.gameService.refresh$.subscribe(() => {
      this.get();
    });
  }

  async get(): Promise<void> {
    this.game = await this.gameService.getOneGame(this.id);
  }
}
