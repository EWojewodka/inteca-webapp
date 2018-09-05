import {Component, OnInit, Injectable, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import {SearchService} from './search.service';

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

  constructor(private fb: FormBuilder,private router: Router, private searchService: SearchService) {
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

  /**
  * Route app to profile view
  */
  showFamily(row){
    this.router.navigate(['/profile', row.id]);
  }

  /**
  *  Fetch fathers from api and result set as datasource
  */
  search(){
    var values = this.filterForm.value;
    const params = new HttpParams()
    .set('firstname', this.getOrEmptyString(values.firstname))
    .set('secondname', this.getOrEmptyString(values.secondname))
    .set('pesel', this.getOrEmptyString(values.pesel))
    .set('sex', this.getOrEmptyString(values.sex));
    this.searchService.search(params, res => {
      this.dataSource.data = res;
    });
  }

  /**
  * Return passed value or empty string if it's undefined or null
  */
  getOrEmptyString(value) {
    return value === undefined || value === null ? '' : value;
  }

}
