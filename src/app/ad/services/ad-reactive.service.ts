import {Injectable, NgZone} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';
import { BRANDS_STREAM_URL, TEST} from '../../services/http-constants';
import {Brand} from '../model/Brand';

@Injectable()
export class AdReactiveService {
  private brandWatchSource = new BehaviorSubject<Brand>(null);
  _brandWatchSource: Observable<Brand> = this.brandWatchSource.asObservable();






  constructor(private http: HttpClient, private zone: NgZone) {
    const subscription = this.getBrandStream().subscribe(category => {
        this.brandWatchSource.next(category);

      }, error => console.log('Error: ' + error),
      () => {


        console.log('done loading brand stream');
        subscription.unsubscribe();
      });
  }




  /**
   * Subscribe to the categories update Server Sent Event stream
   */
  getBrandStream(): Observable<Brand> {
    return new Observable((observer) => {
      const token = localStorage.getItem('token');
      const eventSource = new EventSource(BRANDS_STREAM_URL);


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
