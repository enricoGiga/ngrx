import {Injectable, NgZone} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {Category, EventE} from '../model/Category';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BASE_URL, CATEGORIE_URL, CATEGORIE_STREAM_URL, TEST} from '../../services/constants';

@Injectable()
export class AdService {
  private categoryWatchSource = new BehaviorSubject<Category>(null);
  _categoryWatchSource: Observable<Category> = this.categoryWatchSource.asObservable();
  constructor(private http: HttpClient, private zone: NgZone) {
    // this.getTeamsStream().subscribe(category => {
    //     this.categoryWatchSource.next(category);
    //   }, error => console.log('Error: ' + error),
    //   () => console.log('done loading team stream'));
  }



  fetchTest(): Observable<Category[]> {
    return this.http.get<Category[]>(TEST );
  }

  findEvent(): Observable<EventE> {
    return this.http.get<EventE>(CATEGORIE_STREAM_URL + '60f816b66059d3138b0d6e33/events');
  }

  /**
   * Subscribe to the teams update Server Sent Event stream
   */
  getTeamsStream(): Observable<Category> {
    return new Observable((observer) => {

      const eventSource = new EventSource(CATEGORIE_STREAM_URL);

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
