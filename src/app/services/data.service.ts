import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import get from "lodash/get";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
    getFilms() {
    return this.http.get('http://localhost:8080/SimpleService/webresources/suggestedNameService');
  }
 
  getFilm(id) {
    return this.http.get(`http://localhost:8080/SimpleService/webresources/suggestedNameService/${id}`);
  }
  
}
