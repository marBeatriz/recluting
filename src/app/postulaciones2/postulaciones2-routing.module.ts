import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Postulaciones2Page } from './postulaciones2.page';

const routes: Routes = [
  {
    path: '',
    component: Postulaciones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Postulaciones2PageRoutingModule {}
