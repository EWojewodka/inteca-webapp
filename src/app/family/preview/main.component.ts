import {Component, OnInit, Injectable} from '@angular/core';
import Father from './../creator/father/father';
import {HttpClient, HttpParams} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'family-preview',
  templateUrl: 'main.component.html'
})
export class FamilyPreviewComponent {
  filterForm: FormGroup;
  displayedColumns = ['id', 'name', 'second name', 'pesel', 'born'];
  dataSource = new FatherDataSource();
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.filterForm = this.fb.group({
      firstname: [null],
      secondname: [null],
      pesel: [null],
      sex: [null]
    });
  }

  ngOnInit() {
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
      this.dataSource.setData(res);
    }, (err) => {
      console.log(err)
    });
  }

  getOrEmptyString(value) {
    return value === undefined || value === null ? '' : value;
  }

}

export class FatherDataSource extends DataSource<any> {
  data = new BehaviorSubject<>();

  connect() : Observable<any[]> {
    return this.data;
  }

  setData(data) {
    this.data = new BehaviorSubject<>(data);
    console.log(this);
  }

  disconnect(){}
}
