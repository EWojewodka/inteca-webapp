import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import Family from './../family';
import Father from './../creator/father/father';
import Child from './../creator/children/child';

@Component({
  selector: 'family-profile',
  templateUrl: 'profile.component.html'
})
export class FamilyProfileComponent implements OnInit{
  fatherId: string;
  father = {};
  children = [];

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.fatherId = route.snapshot.params.fatherId;
  }

  ngOnInit(){
    this.http.get('http://localhost:8080/api/family/get?fatherId=' + this.fatherId).subscribe(res => {
      this.father = res.father;
      this.children = res.children;
    });
  }
}
