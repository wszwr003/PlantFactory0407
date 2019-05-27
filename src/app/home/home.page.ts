import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover.component';
import { NODES } from '../mock/nodes';
import { AddSerivce } from "./add.service";

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
  node:any;
  public cards = NODES;
  constructor(public popoverController: PopoverController,public addService: AddSerivce) { 
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  changeview(){
    this.iscard=!this.iscard;
  }
  ngOnInit() {}

  onClick() {

  }
  addnode(){
    this.cards.push({name:"环境采集节点",addr:"ID:3004",kind:"collect",loc:"实验室3",loc2:"3",x:1,y:1});
  }
  removenode(){
    this.cards.pop();
  }
  add(): void {
    this.addService.add().subscribe(node => this.node = node);
  }
}