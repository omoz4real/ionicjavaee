import { Component, OnInit } from '@angular/core';

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

  constructor(private route: ActivatedRoute, private dataSrvc: DataService) { }

post$: Observable<any>;

  ngOnInit() {
      
      this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dataSrvc.fetchPost(params.get("id")))
    );
    
  }

}