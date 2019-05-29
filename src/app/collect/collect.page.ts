import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.page.html',
  styleUrls: ['./collect.page.scss'],
})
export class CollectPage implements OnInit {
  public url_history:string = '/history';
  public now_data=['22','87','450','1000'];
  public lineChartData: ChartDataSets[] = [
    { data: [25, 24, 26, 26, 27, 25, 26,24, 28, 28, 27, 26, 25, 26], label: '温度(℃)', yAxisID: 'y-axis-1' },
    { data: [75, 74, 73, 77, 77, 77, 77,77, 77, 78, 75, 74, 72, 71], label: '湿度(%)', yAxisID: 'y-axis-0' },
    { data: [470, 470, 480, 490, 482, 488, 480,480, 480, 480, 480, 480, 480, 480], label: '二氧化碳浓度(PPM)', yAxisID: 'y-axis-2' },
    { data: [1000, 1000, 1000, 1000, 1000, 1000, 1000,1000, 996, 987, 950, 988, 1050, 1025], label: '光照强度(LX)', yAxisID: 'y-axis-3' }
  ];
  public lineChartLabels: Label[] = ['13：00', '13：01', '13：02', '13：03', '13：04', '13：05', '13：06','13：00', '13：01', '13：02', '13：03', '13：04', '13：05', '13：06'];
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

  constructor(private screenOrientation: ScreenOrientation) { }

  ngOnInit() {
    this.mockDataGet();
    this.screenOrientation.lock(`landscape`);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.screenOrientation.unlock();
  }

  private generateNumber(i: number) { 
    if(i==0)
      return Math.floor((Math.random()*2) + 26); //温度
    else if(i==1)
      return Math.floor((Math.random() * 5) + 70); //湿度
    else if(i==2)
      return Math.floor((Math.random() * 50) + 450);  //二氧化碳
    else if(i==3)
      return Math.floor((Math.random() * 50) + 1000);//光照
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
    var time =new Date().toTimeString().slice(0,8);
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
      this.now_data[i]=num.toString();
      data.shift();
    });
    this.lineChartLabels.push(time);
    this.lineChartLabels.shift();
  }
}
