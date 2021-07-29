import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AuthService} from '../auth/auth.service';
import {AdReactiveService} from './services/ad-reactive.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import TokenInterceptor from '../services/token.interceptor';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';





export const adRoutes: Routes = [
  {
    path: '',
    component: HomeComponent

  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(adRoutes),
    CommonModule,
    MatGridListModule,
    ListboxModule,
    FormsModule,
  ],
  exports: [HomeComponent]

})
export class AdModule {
  static forRoot(): ModuleWithProviders<AdModule> {
    return {
      ngModule: AdModule
    };
  }
}
