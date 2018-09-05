import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient){}

  public search(params){
    console.log(params);
    this.http.get<any[]>("http://localhost:8080/api/family/search", {params: params})
    .subscribe((res) => console.log(res), (err) => {
      console.log(err)
    });
  }

}
