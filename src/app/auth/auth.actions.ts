import {createAction, props} from '@ngrx/store';
import {User} from './model/user.model';

// login action creator
export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User, token: string }>()
);
export const logout = createAction(
  '[Top Menu] Logout'
);
