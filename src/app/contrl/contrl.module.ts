import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContrlPage } from './contrl.page';

const routes: Routes = [
  {
    path: '',
    component: ContrlPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContrlPage],
  entryComponents: [
    ContrlPage
],
})
export class ContrlPageModule {}
