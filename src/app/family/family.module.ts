import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyCreatorComponent} from './creator/creator.component';
import { MenuComponent} from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {OverlayModule, OverlayContainer, FullscreenOverlayContainer} from '@angular/cdk/overlay';
import {MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import FatherCreator from './creator/father/father-creator';
import ChildCreator from './creator/children/child-creator';
import { HttpClientModule } from '@angular/common/http';
import {FamilyPreviewComponent} from './preview/main.component';

@NgModule({
  declarations: [
    FamilyCreatorComponent,
    MenuComponent,
    FatherCreator,
    ChildCreator,
    FamilyPreviewComponent
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
    BrowserAnimationsModule,
    HttpClientModule,
    OverlayModule
  ],
  exports: [
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}]
})
export class FamilyModule { }
