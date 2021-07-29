import {Component, OnInit} from '@angular/core';
import {AdReactiveService} from '../services/ad-reactive.service';
import {noop, Observable} from 'rxjs';
import {Brand} from '../model/Brand';
import {PrimeNGConfig} from 'primeng/api';
import {AdService} from '../services/ad.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdReactiveService]
})
export class HomeComponent implements OnInit {
  brands: Brand[] = [];
  selectedBrand: Brand;

  brands$: Observable<Brand[]>;
  constructor(
    // private adReactiveService: AdReactiveService,
              private primengConfig: PrimeNGConfig,
              private adService: AdService) {
    // this.loadBrandReactiveWay();

  }


  ngOnInit(): void {
    this.brands$ = this.loadBrands();
    this.primengConfig.ripple = true;

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

  private loadBrands() {
    return this.adService.fetchBrands();
  }
}
