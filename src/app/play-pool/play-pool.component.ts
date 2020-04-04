import { Component, OnInit } from '@angular/core';
import { AccountsService } from './logging-service/accounts.service';


@Component({
  selector: 'app-play-pool',
  templateUrl: './play-pool.component.html',
  styleUrls: ['./play-pool.component.css'],
  providers: [AccountsService],

})



export class PlayPoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
