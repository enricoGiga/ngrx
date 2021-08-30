import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(step1, step2, step3) {

    console.log(step1, step2, step3);

  }

}
