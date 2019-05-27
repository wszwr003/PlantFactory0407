import { Component, OnInit} from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  template: `
<ion-list>
  <ion-segment color="success" (ionChange)="segmentChanged($event)" value="contrl">
  <ion-segment-button checked layout="icon-bottom" value="water">
  <img src="./assets/water.png" style="width: 3rem">
    <ion-label>营养液</ion-label>
  </ion-segment-button>
  <ion-segment-button layout="icon-bottom" value="contrl">
  <img src="./assets/contrl.png" style="width: 3rem">
    <ion-label>环境控制</ion-label>
  </ion-segment-button>
  <ion-segment-button layout="icon-bottom" value="collect">
  <img src="./assets/collect.png" style="width: 3rem">
    <ion-label>环境采集</ion-label>
  </ion-segment-button>
  </ion-segment>  
<ion-input color="success" placeholder="设备ID"></ion-input>
<ion-input color="success" placeholder="部署位置"></ion-input>
<ion-button expand="block" color="success">添加节点</ion-button>
</ion-list>
`,
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) {}
 
  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }
 
  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segment changed:', ev.target.value);
  }

  add(ev: any) {
    console.log('node add:', ev.target.value);
  }

}
