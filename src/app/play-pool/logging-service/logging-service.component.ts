import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-logging-service',
  templateUrl: './logging-service.component.html',
  styleUrls: ['./logging-service.component.css'],
  // providers: [AccountsService]
})
export class LoggingServiceComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
// accounts = [
//   {
//     name: 'Master Account',
//     status: 'active'
//   },
//   {
//     name: 'Test Account',
//     status: 'inactive'
//   },
//   {
//     name: 'Hidden Account',
//     status: 'unknown'
//   }
// ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

}
