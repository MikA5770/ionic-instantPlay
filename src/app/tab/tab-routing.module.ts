import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: '',
        redirectTo: 'games',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('../game-list/game-list.module').then(
            (m) => m.GameListPageModule
          ),
      },
      {
        path: 'edit/:id',
        loadChildren: () =>
          import('../game-edit/game-edit.module').then(
            (m) => m.GameEditPageModule
          ),
      },
      {
        path: 'game-new',
        loadChildren: () =>
          import('../game-new/game-new.module').then(
            (m) => m.GameNewPageModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginPageModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('../signup/signup.module').then((m) => m.SignupPageModule),
      },
      {
        path: 'game/:id',
        loadChildren: () =>
          import('../one-game/one-game.module').then(
            (m) => m.OneGamePageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
