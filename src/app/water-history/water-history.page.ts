import { Component, OnInit ,ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-history',
  templateUrl: './water-history.page.html',
  styleUrls: ['./water-history.page.scss'],
})
export class HistoryPage implements OnInit {
  public url_time:string = '/water-history-time';
  public lineChartData: ChartDataSets[] = [
    { data: [], label: '液温(℃)', yAxisID: 'y-axis-1' },
    { data: [], label: '电导率(%)', yAxisID: 'y-axis-0' },
    { data: [], label: 'PH', yAxisID: 'y-axis-2' },
    { data: [], label: '液位(cm)', yAxisID: 'y-axis-3' }
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
  }

  private generateNumber(i: number) { 
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public pushOne() { //推送一组新数据并更新图表
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`13:06`);
  }
}
