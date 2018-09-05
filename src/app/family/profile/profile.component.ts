import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiConnector} from '../../api/api-connector.service';
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

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiConnector){
    this.fatherId = route.snapshot.params.fatherId;
  }

  ngOnInit(){
    this.api.get('family/get?fatherId=' + this.fatherId, null, res => {
      this.father = res.father;
      this.children = res.children;
    }, err => {
      this.router.navigate(['']);
    });
  }
}
