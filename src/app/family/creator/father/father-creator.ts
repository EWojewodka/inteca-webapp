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
      firstname: ['Marek', Validators.required ],
      secondname: ['Grechuta', null],
      pesel: ['12345678912', [Validators.required, Validators.pattern("\\d{11}")]],
      born: ['1945-12-10', [Validators.required, Validators.pattern("\\d{4}-\\d{2}-\\d{2}")] ]
    });
  }

  ngOnInit(){}

  addFather(firstname, secondname, pesel, born) {
    if(this.form.status !== 'VALID')
      return;

    this.father = new Father(firstname, secondname, pesel, born);
  }

}
