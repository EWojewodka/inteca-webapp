import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { FamilyModule } from './family/family.module';
import {FamilyCreatorComponent} from './family/creator/creator.component';
import {MenuComponent} from './family/menu/menu.component';
/*import {FatherState} from './family/creator/father/father-creator';*/

import { NgxsModule } from '@ngxs/store';

const appRoutes: Routes = [
  {
    path: '',
    component: MenuComponent,
    pathMatch: 'full',
    data: {state: 'menu'}
  },
  {
    path: 'creator',
    component: FamilyCreatorComponent,
    data: {state: 'creator'}
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    FamilyModule,
    NgxsModule.forRoot([
      /*FatherState*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
