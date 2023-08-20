import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {
  predictionData: any[]=[
    {header: 'Name', value: '****'},
    {header: 'Gender', value: 'Male'},
    {header: 'Age', value: '81'},
    {header: 'DOB', value: '06/02/1940'},
    {header: 'Life Expentency Mean', value: '78 Year'}
  ];
  medicalHistoryInfo: any[]=[
    {header: 'Medical Record End Date', value: '03/21/2015'},
    {header: 'Medical Record Start Date', value: '03/01/1999'},
    {header: 'SSN', value: '****'},
    {header: 'BMI', value: '22.96'},
    {header: 'Life Expentency Median', value: '81 Year'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
