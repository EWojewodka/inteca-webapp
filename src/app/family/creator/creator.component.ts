import { Component,  OnInit, ViewChild } from '@angular/core';
import FatherCreator from './father/father-creator';
import ChildCreator from './children/child-creator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Family from './../family';
import { Router } from '@angular/router';

@Component({
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class FamilyCreatorComponent implements OnInit{

  @ViewChild(FatherCreator) fatherCreatorStep: FatherCreator;
  @ViewChild(ChildCreator) childCreatorStep: ChildCreator;

  isLinear = true;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) {
  }

  ngOnInit(){}

  finish(){
    var family = new Family();
    family.father = this.fatherCreatorStep.father;
    family.children = this.childCreatorStep.children;
    this.http.post("http://localhost:8080/api/family/create", family).subscribe((res) => {
      this.route.navigate(['/profile', res.father.id])
    }, (err) => console.log(err));
    family.father = null;
    family.children = [];
  }

}
