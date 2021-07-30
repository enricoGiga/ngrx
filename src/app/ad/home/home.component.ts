import {Component, OnInit} from '@angular/core';
import {AdReactiveService} from '../services/ad-reactive.service';
import {Observable} from 'rxjs';
import {Brand} from '../model/Brand';
import {AdService} from '../services/ad.service';
import {Allocation} from '../model/Allocation';
import {Category} from '../model/Category';


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


  constructor(
    // private adReactiveService: AdReactiveService,

    private adService: AdService) {
    // this.loadBrandReactiveWay();

  }

  ngOnInit(): void {
    this.brands$ = this.adService.fetchBrands();
    this.allocations$ = this.adService.fetchAllocations();


  }

  // private loadBrandReactiveWay(): void {
  //
  //   // subscribe to initial set of teams
  //   this.adReactiveService._brandWatchSource.subscribe(value => {
  //     if (value !== undefined && value !== null) {
  //       this.brands.push(value);
  //     }
  //   });
  //
  //
  // }


  setSelectedCategoty(categories: Category[]) {
    this.categories = {...categories};
  }
}
