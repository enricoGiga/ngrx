import {Injectable, NgZone} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {Category} from '../model/Category';
import {HttpClient} from '@angular/common/http';
import {STEREAM_TAILABLE_CATEGORIE_URL, STREAM_CATEGORIE_URL, TEST} from '../../services/http-constants';

// import 'node_modules/event-source-polyfill/src/eventsource.min.js';

// declare var EventSourcePolyfill: any;
@Injectable()
export class AdService {
  private categoryWatchSource = new BehaviorSubject<Category>(null);
  _categoryWatchSource: Observable<Category> = this.categoryWatchSource.asObservable();


  allCategory: Category[] = [];
  private allCategoryWatchSource = new BehaviorSubject<Category[]>(null);
  _allCategories: Observable<Category[]> = this.allCategoryWatchSource.asObservable();

  constructor(private http: HttpClient, private zone: NgZone) {
    const subscription = this.getCategoriesStream().subscribe(category => {
        this.categoryWatchSource.next(category);
        // this.allCategory.push(category);
      }, error => console.log('Error: ' + error),
      () => {

        // this.allCategoryWatchSource.next(this.allCategory);
        console.log('done loading team stream');
        subscription.unsubscribe();
      });
  }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(STREAM_CATEGORIE_URL);
  }

  fetchTest(): Observable<Category[]> {
    return this.http.get<Category[]>(TEST);
  }

  /**
   * Subscribe to the categories update Server Sent Event stream
   */
  getCategoriesStream(): Observable<Category> {
    return new Observable((observer) => {
      const token = localStorage.getItem('token');
      const eventSource = new EventSource(STEREAM_TAILABLE_CATEGORIE_URL);


      eventSource.onmessage = (event) => {
        const json = JSON.parse(event.data);
        if (json !== undefined && json !== '') {
          this.zone.run(() => observer.next(json));
        }
      };

      eventSource.onerror = (error) => {
        if (eventSource.readyState === 0) {
          console.log('The stream has been closed by the server.');
          eventSource.close();
          observer.complete();
        } else {
          observer.error('EventSource error: ' + error);
        }
      };
    });
  }
}
