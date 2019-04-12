import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.page.html',
  styleUrls: ['./collect.page.scss'],
})
export class CollectPage implements OnInit {
  public url_history:string = '/history';
  public lineChartData: ChartDataSets[] = [
    { data: [15, 17, 29, 33, 37, 25, 16], label: '温度(℃)', yAxisID: 'y-axis-1' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: '湿度(%)', yAxisID: 'y-axis-0' },
    { data: [1800, 480, 770, 900, 1000, 2700, 4000], label: '二氧化碳浓度(PPM)', yAxisID: 'y-axis-2' },
    { data: [180, 480, 770, 90, 1000, 270, 400], label: '光照强度(LX)', yAxisID: 'y-axis-3' }
  ];
  public lineChartLabels: Label[] = ['13：00', '13：01', '13：02', '13：03', '13：04', '13：05', '13：06'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          // gridLines: {
          //   color: 'rgba(79,79,79,1)', //gray
          // },
          ticks: {
            fontColor: 'rgba(79,79,79,1)',
          }
        },
        {
          id: 'y-axis-1',
          position: 'left',
          // gridLines: {
          //   color: 'rgba(255,69,0,1)', //orange
          // },
          ticks: {
            fontColor: 'rgba(255,69,0,1)',
          }
        },
        {
          id: 'y-axis-2',
          position: 'right',
          // gridLines: {
          //   color: 'rgba(0,191,255,1)',//blue
          // },
          ticks: {
            fontColor: 'rgba(0,191,255,1)',
          }
        },
        {
          id: 'y-axis-3',
          position: 'right',
          // gridLines: {
          //   color: 'rgba(34,139,34,1)',//green
          // },
          ticks: {
            fontColor: 'rgba(34,139,34,1)',
          }
        }

      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // orange
      backgroundColor: 'rgba(255,69,0,0.1)',
      borderColor: 'rgba(255,69,0,1)',
      pointBackgroundColor: 'rgba(255,69,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,69,0,0.8)'
    },
    { // grey
      backgroundColor: 'rgba(79,79,79,0.1)',
      borderColor: 'rgba(79,79,79,1)',
      pointBackgroundColor: 'rgba(79,79,79,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(79,79,79,1)'
    },
    { // red
      backgroundColor: 'rgba(0,191,255,0.1)',
      borderColor: 'rgba(0,191,255,1)',
      pointBackgroundColor: 'rgba(0,191,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,191,255,0.8)'
    },
    { // green
      backgroundColor: 'rgba(34,139,34,0.1)',
      borderColor: 'rgba(34,139,34,1)',
      pointBackgroundColor: 'rgba(34,139,34,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34,139,34,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  //public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
    this.mockDataGet();
  }

  private generateNumber(i: number) { 
    if(i==0)
      return Math.floor((Math.random()*5) + 26); //温度
    else if(i==1)
      return Math.floor((Math.random() * 10) + 70); //湿度
    else if(i==2)
      return Math.floor((Math.random() * 100) + 500);  //二氧化碳
    else if(i==3)
      return Math.floor((Math.random() * 100) + 1000);//光照
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  private mockDataGet() {
    setInterval(() => {
      this.pushOne()
    }, 1000);
  }


  public pushOne() { //推送一组新数据并更新图表
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`13：06`);
  }
}
