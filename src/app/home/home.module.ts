import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalsModule } from '../modals/modals.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // Aqui eu importo o Module de Modais para que a Pagina Home tenha acesso a abrir o Modal Detail
    ModalsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
