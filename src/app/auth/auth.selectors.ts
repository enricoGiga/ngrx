import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';
import {login} from './auth.actions';


export const selectAuthState =
  createFeatureSelector<AuthState>('auth');

// memorized function, viene eseguita solo se lo stato cambia rispetto allo stato precedente, quindi ottimizza rispetto al commit precedente
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !calculateIfTokenExpired(auth)
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);

export function calculateIfTokenExpired(auth: AuthState): boolean {
  if (!!auth.token) {
    return isTokenExpired(auth.token);
  } else {
    const token = localStorage.getItem('token');
      return !!token ? isTokenExpired(token) : false;
  }
}

export function isTokenExpired(token: string) {
  const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
  return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}
