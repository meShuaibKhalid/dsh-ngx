import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-traffic-front-card',
  styleUrls: ['./traffic-front-card.component.scss'],
  templateUrl: './traffic-front-card.component.html',
})
export class TrafficFrontCardComponent {
  @Input() predictionData: any[] = [];

  constructor() {
  }
}
