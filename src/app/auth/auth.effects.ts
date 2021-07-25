import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {login} from './auth.actions';

// a cosa serve un Effects:
// dunque un azione viene dispatchrd , il reducer viene triggered e poi vogliamo un side effect che è quello di salvare l'user nella
// local storage

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.login),
          tap(action => {
              localStorage.setItem('user',
                JSON.stringify(action.user));
              localStorage.setItem('token', action.token);
            }
          )
        )
    ,
    {dispatch: false});

  logout$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.logout),
          tap(action => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
          })
        )
    , {dispatch: false});


  constructor(private actions$: Actions,
              private router: Router) {

  }

}
