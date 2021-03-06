import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { FamilyModule } from './family/family.module';
import {FamilyCreatorComponent} from './family/creator/creator.component';
import {MenuComponent} from './family/menu/menu.component';
import {FamilyPreviewComponent} from './family/preview/main.component';
import {FamilyProfileComponent} from './family/profile/profile.component';


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
  },
  {
    path: 'search',
    component: FamilyPreviewComponent,
    data: {state: 'search'}
  },
  {
    path: 'profile/:fatherId',
    component: FamilyProfileComponent
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
    FamilyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
