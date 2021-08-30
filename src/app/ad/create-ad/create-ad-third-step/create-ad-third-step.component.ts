import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'create-ad-third-step',
  templateUrl: './create-ad-third-step.component.html',
  styleUrls: ['./create-ad-third-step.component.css']
})
export class CreateAdThirdStepComponent implements OnInit {
  form = this.fb.group({});
  constructor(    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
