import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrl-time',
  templateUrl: './contrl-time.page.html',
  styleUrls: ['./contrl-time.page.scss'],
})
export class ContrlTimePage implements OnInit {
  private selectedItem: any;
  private names = [
    '1:00<=时间<=2:30',
    '4:00<=时间<=4:30',
    '5:00<=时间<=7:30',
    '8:00<=时间<=9:30',
    '12:00<=时间<=13:30',
    '17:00<=时间<=22:30',
    '1:00<=时间<=2:30',
    '4:00<=时间<=4:30',
    '5:00<=时间<=7:30',
    '8:00<=时间<=9:30',
    '12:00<=时间<=13:30',
    '17:00<=时间<=22:30',
  ];
  private subs = [
    '蠕动泵D（继电器6）：打开',
    '蠕动泵D（继电器6）：打开',
    '蠕动泵D（继电器6）：打开',
    '蠕动泵D（继电器6）：打开',
    '蠕动泵D（继电器6）：打开',
    '蠕动泵D（继电器6）：打开',
    '蠕动泵E（继电器7）：打开',
    '蠕动泵E（继电器7）：打开',
    '蠕动泵E（继电器7）：打开',
    '蠕动泵E（继电器7）：打开',
    '蠕动泵E（继电器7）：打开',
    '蠕动泵E（继电器7）：打开',
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

