import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { NavController, NavParams, AlertController } from '@ionic/angular';
import { BLE } from '@ionic-native/ble/ngx';

// Bluetooth UUIDs
const BUTTON_SERVICE = 'ffe0';
const BUTTON_STATE_CHARACTERISTIC = 'ffe1';

@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrls: ['./detial.component.scss'],
})
export class DetialComponent implements OnInit {
  peripheral: any = {};
  buttonState: number;
  statusMessage: string;

  constructor(public navCtrl: NavController,
    private ble: BLE,
    private alertCtrl: AlertController,
    private ngZone: NgZone) {
      let device;
      // this.setStatus('Connecting to ' + device.name || device.id);
      
      this.ble.connect('77:5A:7D:1A:B6:FA').subscribe(
        peripheral => this.onConnected(peripheral),
        peripheral => this.showAlert('Disconnected', 'The peripheral unexpectedly disconnected')
      );
    }

  ngOnInit() {}

 // the connection to the peripheral was successful
 onConnected(peripheral) {

  this.peripheral = peripheral;
  this.setStatus('Connected to ' + (peripheral.name || peripheral.id));

  this.ble.startNotification(this.peripheral.id, BUTTON_SERVICE, BUTTON_STATE_CHARACTERISTIC).subscribe(
    data => this.onButtonStateChange(data),
    //() => this.showAlert('Unexpected Error', 'Failed to subscribe for button state changes')
  )

}

onButtonStateChange(buffer:ArrayBuffer) {
  var data = new Uint8Array(buffer);
  console.log(data[0]);

  this.ngZone.run(() => {
    this.buttonState = data[0];
  });

}

// Disconnect peripheral when leaving the page
ionViewWillLeave() {
  console.log('ionViewWillLeave disconnecting Bluetooth');
  this.ble.disconnect(this.peripheral.id).then(
    () => console.log('Disconnected ' + JSON.stringify(this.peripheral)),
    () => console.log('ERROR disconnecting ' + JSON.stringify(this.peripheral))
  )
}

async showAlert(title, message) {
  let alert = await this.alertCtrl.create({
    header: title,
    message: message,
    buttons: ['OK']
  });
  alert.present();
}

setStatus(message) {
  console.log(message);
  this.ngZone.run(() => {
    this.statusMessage = message;
  });
}

}