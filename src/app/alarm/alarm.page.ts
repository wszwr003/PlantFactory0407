import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {
  private selectedItem: any;
  private names = [
    '>=37℃',
    '>=1000ppm'
  ];
  private subs = [
    '温度',
    '二氧化碳浓度'
  ];
  private icon;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.names.length; i++) {
      this.items.push({
        title: this.names[i],
        note: this.subs[i],
        icon: 'switch'
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
