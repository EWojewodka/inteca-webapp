import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilyCreatorComponent} from './creator/creator.component';
import { MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    FamilyCreatorComponent,
    MenuComponent
  ],
  imports: [
    RouterModule
  ],
  providers: []
})
export class FamilyModule { }
