import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public url_contrl: string = '/contrl';
  private selectedItem: any;
  private names = [
    '风机开关',
    '光照开关',
    '二氧化碳开关',
    '水泵开关',
    '新风开关',
    '空调开关',
    '加湿开关',
    '暂无',
    '暂无',
    '暂无',
    '暂无'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.names.length; i++) {
      this.items.push({
        title: this.names[i],
        note: '继电器' + i,
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