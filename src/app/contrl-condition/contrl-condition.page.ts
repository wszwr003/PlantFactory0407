import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrl-condition',
  templateUrl: './contrl-condition.page.html',
  styleUrls: ['./contrl-condition.page.scss'],
})
export class ContrlConditionPage implements OnInit {
  private selectedItem: any;
  private names = [
    '温度>=37℃',
    '温度<=10℃',
    '二氧化碳浓度>=2000ppm',
    '二氧化碳浓度<=700ppm',
    '湿度>=95%',
    '湿度<=60%',
  ];
  private subs = [
    '新风开关（继电器4）：打开',
    '空调开关（继电器5）：打开',
    '二氧化碳开关（继电器2）：关闭',
    '二氧化碳开关（继电器2）：打开',
    '新风开关（继电器4）：打开',
    '加湿开关（继电器6）：打开',
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
