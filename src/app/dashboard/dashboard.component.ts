import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  constructor(public dashService:DashboardService){

  }
  tabs = [
    {
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      name: 'Tab 2',
      icon: 'android'
    }
  ];
  ngOnInit(): void {
    this.createChart();
    this.createChart1();
    this.createChart3();
  }
  public chart: any;
  public chart2: any;
  public chart3: any;
  isVertical = true;
  VehicleCounts = [
    {
      text: 'Total Vehicle',
      value: '2250',
      icon: 'car',
    },
    {
      text: 'Entry',
      value: '2100',
      icon: 'enter',
    },
    {
      text: 'Exit',
      value: '1500',
      icon: 'lock',
    },
    {
      text: 'Not Allowed',
      value: '2',
      icon: 'block',
    },
  ];
  alarms = ['Block Vehicle 12345', 'Server Down', 'Camera Down'];
  recognitionsData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [
      {
        label: 'Recognitions',
        data: [50, 75, 60, 80, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Un Recognitions',
        data: [2, 5, 6, 8, 9],
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
   successRatesData = {
    labels: ['REC', 'UnREC'],
    datasets: [{
      data: [95, 5], 
      backgroundColor: ['#36a2eb', '#ffcd56']
    }]
  };
   plateTypeData = {
    labels: ['Private', 'Public Transaport', 'Private', 'Transport','Police', 'UNO'],
    datasets: [{
      label: 'Plate Type',
      data: [50, 30, 20, 10,5,1],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };
  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',

      data: this.recognitionsData,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  createChart1() {
    this.chart2 = new Chart('chart2', {
      type: 'doughnut',

      data: this.successRatesData,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  createChart3() {
    this.chart3 = new Chart('chart3', {
      type: 'bar',

      data: this.plateTypeData,
      options: {
        aspectRatio: 2.5,
      },
    });
  }

}
