import { Component,  OnInit } from '@angular/core';
import FatherCreator from './father/father-creator';
import {Father} from './father/father';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class FamilyCreatorComponent implements OnInit{
  controller = new FatherCreator(this.form, this.store);
  constructor(private form: FormBuilder, private store: Store) {
  }

   ngOnInit(){}

}
