import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrl',
  templateUrl: './contrl.page.html',
  styleUrls: ['./contrl.page.scss'],
})
export class ContrlPage implements OnInit {
  private buttons = [1,2,3,4,5,6,7,8,9,10]
  private states = ["已开启","已开启","已开启","已开启","已开启","已开启","已关闭","已关闭","已关闭","已关闭"]
  
  constructor() { }

  ngOnInit() {
  }

}
