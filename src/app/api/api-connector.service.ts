import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

/**
* Main object responsible for connecting with server api.
*/
@Injectable()
export class ApiConnector {

  private API_URL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient){}

  public post(url, params, onSuccess, onFailure) {
    this.http.post(this.API_URL + url, params).subscribe(res => onSuccess(res), res => onFailure(res));
  }

  public get(url: string, params: HttpParams, onSuccess, onFailure) {
    this.http.get(this.API_URL + url, {params: params}).subscribe(res => onSuccess(res), res => onFailure(res));
  }

}
