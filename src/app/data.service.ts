import { Injectable } from '@angular/core';
import { Http , Response,  Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Post } from './post';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

   private _url = "/data.json" ;
  constructor( private _http : Http) { }

  getDataa() : Observable<Post[]>{
    return this._http.get(this._url)
    .map((res:Response) => res.json()); 
  }


  postJSON(){
    var json = JSON.stringify({productCode: 1500 ,
                               productName: "Canon" ,
                               productLine: "Nikon with body and Lens" ,
                               buyPrice: 45000});
    var params = 'json' + json;
    var headers = new Headers();
    headers.append('Content-Type','application/json; charset=utf-8');

    return this._http.post(this._url,params,headers)
    .map(res => res.json());

  }

}
