import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LOGIN_URL, REFRESH_TOKEN_URL} from '../services/constants';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<HttpResponse<any>> {

    return this.http.post<HttpResponse<any>>(LOGIN_URL, {email, password}, {observe: 'response'});
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public refreshToken(userToken: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: userToken,
      isRefreshToken: 'true'
    });

    return this.http.post(REFRESH_TOKEN_URL, {}, {
      headers: headers
    });

  }
}
