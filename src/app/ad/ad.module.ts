import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgOptionHighlightModule} from '@ng-select/ng-option-highlight';
import {SearchAdComponent} from './search-ad/search-ad.component';
import {CreateAdSecondStepComponent} from './create-ad/create-ad-second-step/create-ad-second-step.component';
import {CreateAdThirdStepComponent} from './create-ad/create-ad-third-step/create-ad-third-step.component';
import {MyAdDashboardComponent} from './my-ad-dashboard/my-ad-dashboard.component';
import {CreateAdFirstStepComponent} from './create-ad/create-ad-first-step/create-ad-first-step.component';
import { CreateAdComponent } from './create-ad/create-ad/create-ad.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


export const adRoutes: Routes = [
  {
    path: '',
    component: CreateAdComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

];

@NgModule({
  declarations: [
    HomeComponent,
    SearchAdComponent,
    CreateAdFirstStepComponent,
    CreateAdSecondStepComponent,
    CreateAdThirdStepComponent,
    MyAdDashboardComponent,
    CreateAdComponent,

  ],
  imports: [
    RouterModule.forChild(adRoutes),
    CommonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    MatStepperModule,
    MatButtonModule
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
