import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Brand} from '../model/Brand';
import {ALLOCATIONS_URL, BRANDS_URL} from '../../services/http-constants';
import {Allocation} from '../model/Allocation';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) {


  }

  fetchBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(BRANDS_URL).pipe(shareReplay());
  }

  fetchAllocations(): Observable<Allocation[]> {
    return this.http.get<Allocation[]>(ALLOCATIONS_URL).pipe(shareReplay());
  }
}
