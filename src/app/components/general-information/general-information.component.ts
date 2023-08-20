import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {
  selectedFile: File | null = null;
  uploadSuccess: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onUpload(){
    const btn = document.getElementById('upload')
    console.log('btn: ', btn);
    btn.click()

  }

  onFileSelected(event){
   
    console.log('event: ', event);

  }
}
