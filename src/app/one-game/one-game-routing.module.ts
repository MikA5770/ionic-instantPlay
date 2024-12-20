import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneGamePage } from './one-game.page';

const routes: Routes = [
  {
    path: '',
    component: OneGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneGamePageRoutingModule {}
