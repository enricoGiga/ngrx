import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdFirstStepComponent } from './create-ad-first-step.component';

describe('CreateAdFirstStepComponent', () => {
  let component: CreateAdFirstStepComponent;
  let fixture: ComponentFixture<CreateAdFirstStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdFirstStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
