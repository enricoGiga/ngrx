import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Brand} from '../../model/Brand';
import {Allocation} from '../../model/Allocation';
import {Category} from '../../model/Category';
import {FormBuilder, Validators} from '@angular/forms';
import {AdService} from '../../services/ad.service';
import {last, tap} from 'rxjs/operators';
import {NgSelectComponent} from '@ng-select/ng-select';

@Component({
  selector: 'create-ad-first-step',
  templateUrl: './create-ad-first-step.component.html',
  styleUrls: ['./create-ad-first-step.component.css']
})
export class CreateAdFirstStepComponent implements OnInit {
  // brands: Brand[] = [];
  brands$: Observable<Brand[]>;
  selectedBrand: string;

  allocations$: Observable<Allocation[]>;
  categories: Category[];

  selectedCategory: string;
  form = this.fb.group({
    reparto: ['', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ],
      updateOn: 'blur'
    }],
    category: ['', Validators.required],
    marca: [''],
    modello: [''],
    titolo: [''],
    descrizione: ['']
  });
  isLoadingReparto = true;
  isLoadingCategorie = true;
  isLoadingMarca = true;

  constructor(
    // private adReactiveService: AdReactiveService,
    private fb: FormBuilder,
    private adService: AdService) {
    // this.loadBrandReactiveWay();

  }

  ngOnInit(): void {
    this.brands$ = this.adService.fetchBrands()
      .pipe(last(() => this.isLoadingMarca = false));
    this.allocations$ = this.adService.fetchAllocations()
      .pipe(tap(console.log));


  }


  patchValue(NgSelectCategories: NgSelectComponent, $event: Allocation) {
    this.categories = $event.categories;
    // this.form.get('categories').setValue( $event.categories);
    console.log(this.form.value);
    NgSelectCategories.handleClearClick();
  }

  print() {
    console.log(this.form.value);
  }
}
