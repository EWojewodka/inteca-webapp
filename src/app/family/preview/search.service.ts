import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {ApiConnector} from '../../api/api-connector.service';


@Injectable()
export class SearchService {

  constructor(private api: ApiConnector){}

  public search(params, callback){
    this.api.get('family/search', params, res => callback(res), err => console.log(err));
  }

}
