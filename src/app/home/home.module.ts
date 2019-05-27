import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PopoverComponent } from './popover.component';
import { DeployedComponent } from './deployed/deployed.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'ctrl',
        component: HomePage
      },
      {
        path: '',
        component: DeployedComponent
      }
    ])
  ],
  declarations: [HomePage,PopoverComponent,DeployedComponent],
  entryComponents: [PopoverComponent]

})
export class HomePageModule {}
