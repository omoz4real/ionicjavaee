import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    constructor( private dataservice: DataService,private router: Router,private http: HttpClient,private route: ActivatedRoute) 
    {}
    
    posts$: Observable<any>;
    
    films: Observable<any>;
    
    loadPost(post: any) {
    this.router.navigate(["/post", post.id]);
  }
  
ngOnInit(){
    this.films = this.http.get("http://localhost:8080/SimpleService/webresources/suggestedNameService");    
  }
    
  openDetails(film) {
      this.router.navigate(["/post", film.id]);
//    this.router.navigateByUrl(`/post/{$id}`);
  }


}
