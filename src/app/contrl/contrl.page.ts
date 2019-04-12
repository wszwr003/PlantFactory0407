import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrl',
  templateUrl: './contrl.page.html',
  styleUrls: ['./contrl.page.scss'],
})
export class ContrlPage implements OnInit {
  public url_list:string = '/list';
  public url_contrl_time:string = '/contrl-time';
  public url_contrl_condition:string = '/contrl-condition';
  private states = [open,open,open,open,open,open,close,close,close,close,]
  private states_dis = ["已开启","已开启","已开启","已开启","已开启","已开启","已关闭","已关闭","已关闭","已关闭"]
  
  constructor() { }

  ngOnInit() {
  }

}
