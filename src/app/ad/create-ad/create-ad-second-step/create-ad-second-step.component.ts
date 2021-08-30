import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'create-ad-second-step',
  templateUrl: './create-ad-second-step.component.html',
  styleUrls: ['./create-ad-second-step.component.css']
})
export class CreateAdSecondStepComponent implements OnInit {
  form = this.fb.group({});

  constructor(    private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
