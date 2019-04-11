import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public url_contrl:string = '/contrl';
  public url_collect:string = '/collect';
  public url_water:string = '/water';
  public url_alarm:string = '/alarm';
  public url_history:string = '/history';
  num:number = 4;

  constructor() { }

  ngOnInit() {}

  onClick() {

  }

}