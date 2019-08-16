import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];

    public tableData1: TableData;
    public tableData2: TableData;
  constructor() { }

  ngOnInit() {

    this.tableData1 = {
      headerRow: [ 'ID', 'Company', 'From-To', 'City', 'Technology Used'],
      dataRows: [
          ['1', 'Royal Caribbean LTD', 'Dec-2018 / June-2019', 'Miramar,FL', 'Angular5+ - Python - Spring Boot - Java'],
          ['2', 'Oikos Financial', 'Feb-2018 / Nov-2018', 'Doral,FL', '.Net Core - Azure - Python - Ionic - Angular 5+'],
          ['3', 'Decoaries Corp', 'Apr-2015 / Dec-2017', 'Doral,FL', '.Net Core - Python - Ionic - Angular 2+']
      ]
  };

  this.tableData2 = {
    headerRow: [ 'Skill', '1 - 10'],
    dataRows: [
        ['Python', '9.9'],
        ['C#', '8'],
        ['C++', '8'],
        ['HTML', '8'],
        ['MySQL', '6'],
        ['TypeScript', '7'],
        ['JavaScript', '6'],
        ['.Net Core', '6'],
        ['Angular 2+', '7'],
        ['Ionic', '7'],
        ['Node Js', '5'],
        ['React', '5'],
        ['Powershell', '4']
    ]
  };


      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['50%', '50%'],
        series: [50, 50]
      };
      this.emailChartLegendItems = [
        { title: 'Programming', imageClass: 'fa fa-circle text-danger' },
        { title: 'Music', imageClass: 'fa fa-circle text-info' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
          [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
          [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 800,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 3
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Python', imageClass: 'fa fa-circle text-info' },
        { title: 'HTML/TypeScript/CSS', imageClass: 'fa fa-circle text-danger' },
        { title: 'C#', imageClass: 'fa fa-circle text-warning' },
        { title: 'C++', imageClass: 'fa fa-circle text-success' }
      ];

      //Active Char.

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Python','HTML', 'TS', 'JS', 'CSS', 'C#', 'C++', 'SQL'],
        series: [
          [10, 8, 8, 8, 6, 7, 7, 5]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Python', imageClass: 'fa fa-circle text-info' },
        { title: 'HTML/TypeScript/CSS', imageClass: 'fa fa-circle text-danger' },
        { title: 'C#', imageClass: 'fa fa-circle text-warning' },
        { title: 'C++', imageClass: 'fa fa-circle text-success' }
      ];


    }

}
