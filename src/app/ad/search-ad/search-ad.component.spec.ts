import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdComponent } from './search-ad.component';

describe('SearchAdComponent', () => {
  let component: SearchAdComponent;
  let fixture: ComponentFixture<SearchAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
