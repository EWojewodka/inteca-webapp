import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { FamilyModule } from './family/family.module';
import {FamilyCreatorComponent} from './family/creator/creator.component';
import {MenuComponent} from './family/menu/menu.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import {FatherCreateState} from './family/creator/creator';

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
      FatherCreateState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
