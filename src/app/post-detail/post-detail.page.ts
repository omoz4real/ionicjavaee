import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataSrvc: DataService, private http: HttpClient) { }

post$: Observable<any>;

film: any;

  ngOnInit() {
      
      let id = this.route.snapshot.paramMap.get('id');
      this.http.get(`http://localhost:8080/SimpleService/webresources/suggestedNameService/${id}`).subscribe(res => {
      this.film = res;
    });
      
      
//      this.post$ = this.route.paramMap.pipe(
//      switchMap((params: ParamMap) => this.dataSrvc.fetchPost(params.get("id")))
//    );
    
  }

}
