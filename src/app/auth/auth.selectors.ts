import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';
import {login} from './auth.actions';


export const selectAuthState =
  createFeatureSelector<AuthState>('auth');

// memorized function, viene eseguita solo se lo stato cambia rispetto allo stato precedente, quindi ottimizza rispetto al commit precedente
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => getUser(auth)
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);

export function getUser(auth: AuthState): boolean {
  if (!!auth.token) {
    return true;
  } else {
    return localStorage.getItem('token') !== null;
  }
}
