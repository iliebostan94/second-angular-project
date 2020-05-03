import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
import { UsersService } from '../../user.service';


@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  userModel: User[];


  // users = [
  //   {
  //     name: 'Jenn',
  //     rating: 5,
  //     comment: 'I liked it! I will share it with my sister.'
  //   },
  //   {
  //     name: 'Alex',
  //     rating: 4,
  //     comment: 'Felt like adding some lemon to it.'
  //   },
  //   {
  //     name: 'Tania',
  //     rating: 5,
  //     comment: 'Really liked it! Gonna share it with my friends ;)'
  //   },
  // ];

  constructor(usersService: UsersService) {
    this.userModel = usersService.getUsers();
  }

  ngOnInit() {

  }

}

