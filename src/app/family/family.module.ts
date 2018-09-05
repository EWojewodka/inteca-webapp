import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule} from '@angular/material';

import { FamilyCreatorComponent} from './creator/creator.component';
import { MenuComponent} from './menu/menu.component';
import FatherCreator from './creator/father/father-creator';
import ChildCreator from './creator/children/child-creator';
import {FamilyPreviewComponent} from './preview/main.component';
import {FamilyProfileComponent} from './profile/profile.component';
import {HeaderComponent} from './header/header.component';
import {SearchService} from './preview/search.service';
import {ApiModule} from './../api/api.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FamilyCreatorComponent,
    MenuComponent,
    FatherCreator,
    ChildCreator,
    FamilyPreviewComponent,
    FamilyProfileComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule
  ],
  providers: [
    SearchService
  ]
})
export class FamilyModule { }
