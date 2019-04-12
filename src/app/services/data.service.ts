import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import get from "lodash/get";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  getRemoteDatas(){  
      return this.http.get("http://localhost:8080/SimpleService/webresources/suggestedNameService")
      .pipe(
            map((posts: Array<any>) => (posts))
            );
  }
  
     fetchPostsByCategory(category_id: string) {
    return this.http
      .get(
        "http://localhost:8080/SimpleService/webresources/suggestedNameService"
      )
      .pipe(
        map((posts: Array<any>) => (posts))
      );
  }
  
  getRemoteData(id: string){  
      return this.http.get("http://localhost:8080/SimpleService/webresources/suggestedNameService")
      .pipe(map((post: any)=>(post)));
      
  }
  
    fetchPost(post_id: string) {
    return this.http
      .get("http://localhost:8080/SimpleService/webresources/suggestedNameService")
      .pipe(map((post: any) => (post)));
  }
  
}
