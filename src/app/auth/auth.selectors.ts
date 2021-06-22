import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';


export const selectAuthState =
  createFeatureSelector<AuthState>('auth');

// memorized function, viene eseguita solo se lo stato cambia rispetto allo stato precedente, quindi ottimizza rispetto al commit precedente
export const isLoggedIn = createSelector(
  selectAuthState,
  auth => !!auth.user
);


export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
