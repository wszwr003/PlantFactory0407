import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { PopoverComponent } from './popover.component';
import { DeployedComponent } from './deployed/deployed.component'
import { BleComponent } from '../ble/ble.component'

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
        path: 'deployed',
        component: DeployedComponent
      },
      {
        path: 'ble',
        component: BleComponent
      }
    ])
  ],
  declarations: [HomePage,PopoverComponent,DeployedComponent,BleComponent],
  entryComponents: [PopoverComponent]

})
export class HomePageModule {}
