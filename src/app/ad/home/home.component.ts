import {Component, OnInit} from '@angular/core';
import {AdReactiveService} from '../services/ad-reactive.service';
import {Observable} from 'rxjs';
import {Brand} from '../model/Brand';
import {AdService} from '../services/ad.service';
import {Allocation} from '../model/Allocation';
import {Category} from '../model/Category';
import {FormBuilder, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {NgSelectComponent} from '@ng-select/ng-select';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdReactiveService]
})
export class HomeComponent implements OnInit {
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
    titoloAnnuncio: [''],
    testoAnnuncio: ['']
  });

  constructor(
    // private adReactiveService: AdReactiveService,
    private fb: FormBuilder,
    private adService: AdService) {
    // this.loadBrandReactiveWay();

  }

  ngOnInit(): void {
    this.brands$ = this.adService.fetchBrands();
    this.allocations$ = this.adService.fetchAllocations().pipe(tap(console.log));


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
