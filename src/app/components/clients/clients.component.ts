import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    console.log('onSubmit: ', form);
  }

}
