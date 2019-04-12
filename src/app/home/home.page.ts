import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    constructor(
    private dataservice: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) 
    {}
    
    posts$: Observable<any>;
    loadPost(post: any) {
    this.router.navigate(["/post", post.id]);
  }
ngOnInit(){
//   this.dataservice.getRemoteData().subscribe( data=>{
//   console.log("Remote Data");
//   console.log(data);
//   
//   }
//   );
    this.posts$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.dataservice.getRemoteDatas()
      )
    );
}



}
