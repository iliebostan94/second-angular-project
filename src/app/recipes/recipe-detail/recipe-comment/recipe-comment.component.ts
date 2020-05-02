import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-comment',
  templateUrl: './recipe-comment.component.html',
  styleUrls: ['./recipe-comment.component.css']
})
export class RecipeCommentComponent implements OnInit {
  user: {name: string, rating: number};



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params.name,
      rating: this.route.snapshot.params.rating
    };
  }

}
