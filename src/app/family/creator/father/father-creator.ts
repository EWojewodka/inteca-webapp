import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Father from './father';

@Component({
  selector: 'father-creator',
  templateUrl: 'form.component.html'
})
export default class FatherCreator implements OnInit{
  title = "Creator of fathers";
  public form: FormGroup;
  public father: Father;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', Validators.required ],
      secondname: ['', Validators.required ],
      pesel: ['', Validators.required ],
      born: ['', Validators.required ]
    });
  }

  ngOnInit(){}

  addFather(firstname, secondname, pesel, born) {
    this.father = new Father(firstname, secondname, pesel, born);
    console.log(this.father);
  }

}
