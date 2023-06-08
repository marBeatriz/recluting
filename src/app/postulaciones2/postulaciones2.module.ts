import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Postulaciones2PageRoutingModule } from './postulaciones2-routing.module';

import { Postulaciones2Page } from './postulaciones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Postulaciones2PageRoutingModule
  ],
  declarations: [Postulaciones2Page]
})
export class Postulaciones2PageModule {}
