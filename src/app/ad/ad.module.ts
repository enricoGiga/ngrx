import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';

import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';


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
    FormsModule,
    NgSelectModule,
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
