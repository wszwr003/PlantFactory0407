import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx'
import { NavController, ToastController } from '@ionic/angular';
import { DetialComponent } from './detial/detial.component'

@Component({
  selector: 'app-ble',
  templateUrl: './ble.component.html',
  styleUrls: ['./ble.component.scss'],
})
export class BleComponent implements OnInit {

  devices: any[] = [];
  statusMessage: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    private ble: BLE,
    private ngZone: NgZone) {
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
   async scanError(error) {
    this.setStatus('Error ' + error);
    let toast = await this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device){

  }

  ngOnInit() { }

}
