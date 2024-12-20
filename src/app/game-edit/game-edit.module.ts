import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameEditPageRoutingModule } from './game-edit-routing.module';

import { GameEditPage } from './game-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameEditPageRoutingModule
  ],
  declarations: [GameEditPage]
})
export class GameEditPageModule {}
