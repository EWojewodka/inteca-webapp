import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyCreatorComponent} from './creator/creator.component';
import { MenuComponent} from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import FatherCreator from './creator/father/father-creator';
import ChildCreator from './creator/children/child-creator';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FamilyCreatorComponent,
    MenuComponent,
    FatherCreator,
    ChildCreator
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: []
})
export class FamilyModule { }
