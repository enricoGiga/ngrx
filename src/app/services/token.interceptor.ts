import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {REFRESH_TOKEN_URL} from './http-constants';
import {TokenDecodedInfo} from '../auth/model/TokenDecodedInfo';
import jwt_decode from 'jwt-decode';
import {UserInfo} from '../auth/model/UserInfo';
import {login, logout} from '../auth/auth.actions';
import {Store} from '@ngrx/store';
import {AuthState} from '../auth/reducers';
import {Router} from '@angular/router';

@Injectable()
export default class TokenInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient, private authService: AuthService, private store: Store<AuthState>, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (request.url.includes('login') || request.url.includes('signup')) {
      return next.handle(request);
    }

    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    });
    const newRequest = request.clone({headers: headers});
    return next.handle(newRequest)
      .pipe(catchError(err => {
        if (err instanceof HttpErrorResponse) {

          if (err.status === 403) {
            this.store.dispatch(logout());
            // const headers = new HttpHeaders({
            //   Authorization: token,
            //   isRefreshToken: 'true'
            // });
            // const refreshTokenrequest = request.clone({headers: headers, usrl: REFRESH_TOKEN_URL});
            // return next.handle(refreshTokenrequest).pipe(
            //   tap((data: HttpEvent<any>) => {
            //     const refreshedToken = data?.headers.get('Authorization');
            //     const userTokenInfo: TokenDecodedInfo = jwt_decode(refreshedToken);
            //
            //     const userInfo: UserInfo = {firstName: userTokenInfo.firstName, lastName: userTokenInfo.lastName};
            //     this.store.dispatch(login({user: userInfo, token: refreshedToken}));
            //   }),
            //   catchError(err1 => new Observable<HttpEvent<any>>())
            // );


          } else if (err.status === 500) {

            // Handler internal server error
            // console.log("Server is not responding.")
            // alert("Try after some time.")
          }
          // ......
        }
        return new Observable<HttpEvent<any>>();
      }));
  }
}
