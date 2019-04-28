import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrl-condition',
  templateUrl: './contrl-condition.page.html',
  styleUrls: ['./contrl-condition.page.scss'],
})
export class ContrlConditionPage implements OnInit {
  private selectedItem: any;
  private names = [
    '液位>=40cm',
    '液位<=10cm',
    '电导率>=0.8mS/cm',
    '电导率<=0.3mS/cm',
    '电导率>=0.8mS/cm',
    '电导率<=0.3mS/cm',
    '电导率>=0.8mS/cm',
    '电导率<=0.3mS/cm',
    '液温>=25℃',
    '液温<=10℃',
  ];
  private subs = [
    '营养液加水（继电器2）：关闭',
    '营养液加水（继电器2）：打开',
    '蠕动泵A（继电器3）：关闭',
    '蠕动泵A（继电器3）：打开',
    '蠕动泵B（继电器4）：关闭',
    '蠕动泵B（继电器4）：打开',
    '蠕动泵C（继电器5）：关闭',
    '蠕动泵C（继电器5）：打开',
    '营养液加热（继电器1）：关闭',
    '营养液加热（继电器1）：打开',
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
