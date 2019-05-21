import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  iscard:boolean = true;
  public url_contrl:string = '/contrl';
  public url_collect:string = '/collect';
  public url_water:string = '/water';
  public url_alarm:string = '/alarm';
  public url_history:string = '/history';
  num:number = 4;
  cards = [
    {name:"营养液节点",addr:"0X:11",kind:"water",loc:"1514室"},
    {name:"环境控制节点",addr:"0X:21",kind:"air",loc:"1514室"},
    {name:"环境采集节点",addr:"0X:31",kind:"collect",loc:"1514室"},
    {name:"环境采集节点",addr:"0X:32",kind:"collect",loc:"1514室"},
    {name:"环境采集节点",addr:"0X:33",kind:"collect",loc:"1514室"},
    {name:"环境采集节点",addr:"0X:34",kind:"collect",loc:"1514室"},
  ]


  constructor(public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {}

  onClick() {

  }

}