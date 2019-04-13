import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { HttpClient } from '@angular/common/http';
import get from "lodash/get";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    constructor( private dataservice: DataService,private router: Router,private http: HttpClient,private route: ActivatedRoute) 
    {}
    
    
    films: Observable<any>;
    
  
ngOnInit(){
    this.films = this.dataservice.getFilms();
//    this.films = this.http.get("http://localhost:8080/SimpleService/webresources/suggestedNameService");    
  }
    
  openDetails(film) {
      this.router.navigate(["/post", film.id]);
//    this.router.navigateByUrl(`/post/{$id}`);
  }


}
