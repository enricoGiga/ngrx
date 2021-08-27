import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdThirdStepComponent } from './create-ad-third-step.component';

describe('CreateAdThirdStepComponent', () => {
  let component: CreateAdThirdStepComponent;
  let fixture: ComponentFixture<CreateAdThirdStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdThirdStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdThirdStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
