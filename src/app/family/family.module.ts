import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyCreatorComponent} from './creator/creator.component';
import { MenuComponent} from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FamilyCreatorComponent,
    MenuComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: []
})
export class FamilyModule { }
