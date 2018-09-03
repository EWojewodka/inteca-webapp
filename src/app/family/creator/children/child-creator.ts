import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import Child from './child';

@Component({
  selector: 'child-creator',
  templateUrl: 'form.component.html'
})
export default class ChildCreator implements OnInit{
  title = "Creator of children";
  form: FormGroup;
  children = [];

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit(){
    this.form = this.fb.group({
      firstname: ['', Validators.required ],
      secondname: ['', Validators.required ],
      pesel: ['', Validators.required ],
      sex: ['', Validators.required ]
    });
  }

  addChild(firstname, secondname, pesel, sex) {
    this.children.push(new Child(firstname, secondname, pesel, sex));
  }

}
