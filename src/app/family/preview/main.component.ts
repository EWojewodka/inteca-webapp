import {Component, OnInit, Injectable, ViewChild} from '@angular/core';
import Father from './../creator/father/father';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'family-preview',
  templateUrl: 'main.component.html'
})
export class FamilyPreviewComponent {

  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  filterForm: FormGroup;
  displayedColumns = ['id', 'name', 'second name', 'pesel', 'born'];
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.filterForm = this.fb.group({
      firstname: [null],
      secondname: [null],
      pesel: [null],
      sex: [null]
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  showFamily(row){
    this.router.navigate(['/create']);
  }

  search(){
    var values = this.filterForm.value;
    const params = new HttpParams()
    .set('firstname', this.getOrEmptyString(values.firstname))
    .set('secondname', this.getOrEmptyString(values.secondname))
    .set('pesel', this.getOrEmptyString(values.pesel))
    .set('sex', this.getOrEmptyString(values.sex));
    this.http.get<Father[]>("http://localhost:8080/api/family/search", {params: params})
    .subscribe((res) => {
      console.log(this.dataSource);
      this.dataSource.data = res;
    }, (err) => {
      console.log(err)
    });
  }

  getOrEmptyString(value) {
    return value === undefined || value === null ? '' : value;
  }

}
