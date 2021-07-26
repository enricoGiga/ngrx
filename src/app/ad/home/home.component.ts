import {Component, OnInit} from '@angular/core';
import {AdService} from '../services/ad.service';
import {noop, Observable} from 'rxjs';
import {Category, EventE} from '../model/Category';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AdService]
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private adHttpService: AdService) {
  }

  categories$: Observable<Category[]>;
  event$: Observable<EventE>;

  ngOnInit(): void {
    // this.adHttpService.getAllCategories()
    //   .subscribe(value => {
    //     console.log(value);
    //     this.categories = value;
    //   });
    this.adHttpService.fetchTest().subscribe(value => {
      console.log(value);
    });
    // this.event$ = this.adHttpService.findEvent();
    this.loadCategories();
  }

  private loadCategories(): void {

    // subscribe to initial set of teams
    this.adHttpService._categoryWatchSource.subscribe(value => {
      if (value !== undefined && value !== null) {
        this.categories.push(value);
      }
    });


  }
}
