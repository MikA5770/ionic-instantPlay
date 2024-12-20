import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user: User | null = null;
  admin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    });

    this.authService.isAdmin().subscribe((isAdmin) => {
      this.admin = isAdmin;
    });
  }

  deconnexion() {
    this.authService.signout();
  }
}
