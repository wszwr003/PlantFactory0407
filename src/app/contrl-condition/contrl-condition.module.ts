import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContrlConditionPage } from './contrl-condition.page';

const routes: Routes = [
  {
    path: '',
    component: ContrlConditionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContrlConditionPage]
})
export class ContrlConditionPageModule {}
