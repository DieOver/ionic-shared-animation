import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Array de Components que seram Modais
// Esse array deve ir em entryComponents, declarations e Exports (EDE)
// Todo modal que for ter no Aplicativo voce pode adicionar nesse array.
// e na página que desejar abrir o modal é so importar esse module no module da página.
const EDE = [
  DetailComponent
];

@NgModule({
  entryComponents: EDE,
  declarations: EDE,
  exports: EDE,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ModalsModule { }
