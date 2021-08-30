import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import jwt_decode from 'jwt-decode';
import {Store} from '@ngrx/store';

import {AuthService} from '../auth.service';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Router} from '@angular/router';
import {AuthState} from '../reducers';
import {login} from '../auth.actions';
import {TokenDecodedInfo} from '../model/TokenDecodedInfo';
import {UserInfo} from '../model/UserInfo';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>) {

    this.form = fb.group({
      email: ['enrico.gigante@gmail.com', [Validators.required]],
      password: ['asdasd', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(data => {
          const token = data.headers.get('Authorization');
          const userTokenInfo: TokenDecodedInfo = jwt_decode(token);

          const userInfo: UserInfo = {firstName: userTokenInfo.firstName, lastName: userTokenInfo.lastName};
          this.store.dispatch(login({user: userInfo, token: token}));

          this.router.navigateByUrl('/ad/home');

        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );


  }
}

