import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroClientPage } from './cadastro-client';

@NgModule({
  declarations: [
    CadastroClientPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroClientPage),
  ],
})
export class CadastroClientPageModule {}
