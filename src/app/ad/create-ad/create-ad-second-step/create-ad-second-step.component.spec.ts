import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdSecondStepComponent } from './create-ad-second-step.component';

describe('CreateAdSecondStepComponent', () => {
  let component: CreateAdSecondStepComponent;
  let fixture: ComponentFixture<CreateAdSecondStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdSecondStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
