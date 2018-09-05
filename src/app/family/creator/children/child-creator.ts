import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import Child from './child';

@Component({
  selector: 'child-creator',
  templateUrl: 'form.component.html',
   styleUrls: ['form.component.css']
})
export default class ChildCreator implements OnInit{
  title = "Creator of children";
  form: FormGroup;
  children = [];

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

  ngOnInit(){
    this.form = this.fb.group({
      firstname: ['Super', Validators.required ],
      secondname: ['Bobo', Validators.required ],
      pesel: ['00000000000',[Validators.required, Validators.pattern("\\d{11}")] ],
      dateOfBirth: ['1996-12-07', [Validators.required, Validators.pattern("\\d{4}-\\d{2}-\\d{2}")] ],
      sex: ['', Validators.required ]
    });
  }

  addChild(firstname, secondname, pesel, dateOfBirth, sex) {
    console.log(this.form);
    //Ugh, I have no idea how to check it in other way. :<
    if(this.form.status !== 'VALID')
      return;
    this.openSnackBar('Child is add to family.');
    this.children.push(new Child(firstname, secondname, pesel,dateOfBirth, sex));
    this.form.reset();
  }

}
