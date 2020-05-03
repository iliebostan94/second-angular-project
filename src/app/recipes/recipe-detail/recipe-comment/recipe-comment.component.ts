import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipe-comment',
  templateUrl: './recipe-comment.component.html',
  styleUrls: ['./recipe-comment.component.css']
})
export class RecipeCommentComponent implements OnInit, OnDestroy {
  user: {name: string, rating: number};
  paramsSubscription: Subscription;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params.name,
      rating: this.route.snapshot.params.rating
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.user.name = params.name,
        this.user.rating = params.rating;
      }
    );
  }

  ngOnDestroy() {
this.paramsSubscription.unsubscribe();
  }

}
