import { Component } from '@angular/core';

@Component({
  selector: 'ngx-traffic-reveal-card',
  styleUrls: ['./traffic-reveal-card.component.scss'],
  templateUrl: './traffic-reveal-card.component.html',
})
export class TrafficRevealCardComponent {
  chartOptions = {};
  predictionData: any[]=[
    {header: 'Name', highlightValue: '****'},
    {header: 'Gender', highlightValue: 'Male'},
    {header: 'Age', highlightValue: '81'},
    {header: 'DOB', highlightValue: '06/02/1940'},
    {header: 'Life Expentency Mean', highlightValue: '78 Year'}
  ];
  medicalHistoryInfo: any[]=[
    {header: 'Medical Record End Date', highlightValue: '03/21/2015'},
    {header: 'Medical Record Start Date', highlightValue: '03/01/1999'},
    {header: 'SSN', highlightValue: '****'},
    {header: 'BMI', highlightValue: '22.96'},
    {header: 'Life Expentency Median', highlightValue: '81 Year'}
  ]
  impairments: any[]=[
    {highlightheader: 'Impairments', value: 'Total 31'},
    {header: 'Impairments 1', value: ''},
    {header: 'Impairments 2', value: ''},
    {header: 'Impairments 3', value: ''},
    {header: 'Impairments 4', value: ''},
    {header: 'Show all', headerClass: true, value: ''},
  ]
  medication: any[]=[
    {highlightheader: 'Medication', value: 'Total 31'},
    {header: 'Medication 1', value: ''},
    {header: 'Medication 2', value: ''},
    {header: 'Medication 3', value: ''},
    {header: 'Medication 4', value: ''},
    {header: 'Show all', headerClass: true, value: ''},
  ]
  labs: any[]=[
    {highlightheader: 'Lab', value: 'Total 31'},
    {header: 'Lab 1', value: ''},
    {header: 'Lab 2', value: ''},
    {header: 'Lab 3', value: ''},
    {header: 'Lab 4', value: ''},
    {header: 'Show all', headerClass: true, value: ''},
  ]
  behavioral: any[]=[
    {highlightheader: 'Behavioral', value: 'Total 31'},
    {header: 'Behavioral 1', value: ''},
    {header: 'Behavioral 2', value: ''},
    {header: 'Behavioral 3', value: ''},
    {header: 'Behavioral 4', value: ''},
    {header: 'Show all', headerClass: true, value: ''},
  ]

  footerData: any[]=[
    {highlightheader: 'Months', highlightValue: 'Survivorship'},
    {header: '1', value: '100'},
    {header: '2', value: '93'},
    {header: '3', value: '85'},
    {header: '4', value: '75'},
    {header: '5', value: '67'},
    {header: '6', value: '65'},
    {header: '7', value: '55'},
    {header: '8', value: '48'},
    {header: '9', value: '42'},
    {header: '10', value: '36'},
  ]

  constructor() {}
  test(r){
    console.log('r: ', r);

  }
  ngOnInit(){
    
    this.chartOptions = {
      series: [
        {
          name: '',
          data: [100, 87, 82, 60, 55, 45, 40, 35, 30, 25, 20, 15, 17, 14, 11, 8, 0],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      xaxis: {
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'],
      },
    }
  }
}
