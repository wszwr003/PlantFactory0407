import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { BLE } from '@ionic-native/ble/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { PopoverComponent } from './home/popover.component';
import { LabTabComponent } from './home/lab-tab/lab-tab.component'
import { DetialComponent } from './ble/detial/detial.component'

@NgModule({
  declarations: [AppComponent,LabTabComponent,DetialComponent],
  // entryComponents: [PopoverComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

  ],
  providers: [
    BLE,
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
