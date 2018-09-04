import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Child from './child';

@Component({
  selector: 'child-creator',
  templateUrl: 'form.component.html'
})
export default class ChildCreator implements OnInit{
  title = "Creator of children";
  form: FormGroup;
  children = [];

  constructor(private fb: FormBuilder) {
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
    if(this.form.status !== 'VALID')
      return;
    this.children.push(new Child(firstname, secondname, pesel, sex));
    this.form.reset();
  }

}
